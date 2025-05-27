import express from 'express';
import multer from 'multer';
import fs from 'fs';
import { extractText } from '../utils/extract.js';
import { detectLanguage } from '../utils/language.js';
import { classifySubjects } from '../utils/classify.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.array('files'), async (req, res) => {
  const results = [];

  for (const file of req.files) {
    const text = await extractText(file.path);
    const language = detectLanguage(text);
    const subjects = classifySubjects(text);
    const summary = text.slice(0, 300).replace(/\s+/g, ' ');

    results.push({
      filename: file.originalname,
      language,
      subjects,
      summary
    });

    fs.unlinkSync(file.path);
  }

  fs.writeFileSync('results.json', JSON.stringify(results, null, 2));
  res.json(results);
});

export default router;
