import { promises as fs } from 'node:fs';
import path from 'node:path';

const MIME_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

function badRequest() {
  return new Response('Not found', { status: 404 });
}

export async function GET(_: Request, context: { params: { slug: string[] } }) {
  const slug = context.params.slug ?? [];

  if (slug.length === 1 && slug[0] === 'icon.jpg') {
    const iconPath = path.join(process.cwd(), 'icon.jpg');
    const iconFile = await fs.readFile(iconPath);

    return new Response(iconFile, {
      headers: { 'Content-Type': 'image/jpeg', 'Cache-Control': 'public, max-age=31536000, immutable' }
    });
  }

  if (slug.length < 2) {
    return badRequest();
  }

  const [folder, ...fileParts] = slug;
  if (!['char', 'screenshot'].includes(folder)) {
    return badRequest();
  }

  const fileName = fileParts.join('/');
  const rootDir = path.join(process.cwd(), folder);
  const requestedPath = path.join(rootDir, fileName);

  if (!requestedPath.startsWith(rootDir)) {
    return badRequest();
  }

  const extension = path.extname(requestedPath).toLowerCase();
  const mimeType = MIME_TYPES[extension];

  if (!mimeType) {
    return badRequest();
  }

  try {
    const file = await fs.readFile(requestedPath);
    return new Response(file, {
      headers: { 'Content-Type': mimeType, 'Cache-Control': 'public, max-age=31536000, immutable' }
    });
  } catch {
    return badRequest();
  }
}
