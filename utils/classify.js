import nlp from 'compromise';

export function classifySubjects(text) {
  const doc = nlp(text);
  const nouns = doc.nouns().out('array');
  return [...new Set(nouns.filter(n => n.length > 4))].slice(0, 5);
}
