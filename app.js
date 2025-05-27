import express from 'express';
import path from 'path';
import catalogRoutes from './routes/catalog.js';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use('/api', catalogRoutes);
app.use(express.static(path.join(__dirname, 'public'))); // ← Add this

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Cataloging API is running on port ${PORT}`);
});
