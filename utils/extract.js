import fs from 'fs/promises';
import pkg from 'pdf-parse';
const pdf = pkg.default || pkg;

export async function extractText(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();
  if (ext === 'txt') return await fs.readFile(filePath, 'utf-8');

  const buffer = await fs.readFile(filePath);
  const data = await pdf(buffer);
  return data.text;
}
