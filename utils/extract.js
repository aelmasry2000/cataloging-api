import fs from 'fs/promises';
import { default as pdf } from 'pdf-parse';

export async function extractText(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();
  if (ext === 'txt') return await fs.readFile(filePath, 'utf-8');

  const buffer = await fs.readFile(filePath);
  const data = await pdf(buffer);
  return data.text;
}
