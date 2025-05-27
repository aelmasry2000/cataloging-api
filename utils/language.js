import { franc } from 'franc';

export function detectLanguage(text) {
  const lang = franc(text);
  return lang === 'und' ? 'Unknown' : lang;
}
