import fs from 'fs/promises';

let pdf;
try {
  const pkg = await import('pdf-parse');
  pdf = pkg.default || pkg;
} catch (e) {
  console.error('Failed to load pdf-parse', e);
}

export async function extractText(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();
  if (ext === 'txt') return await fs.readFile(filePath, 'utf-8');

  const buffer = await fs.readFile(filePath);
  const data = await pdf(buffer);
  return data.text;
}
