import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import catalogRoutes from './routes/catalog.js';

// Required to use __dirname with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve JSON API
app.use(express.json());
app.use('/api', catalogRoutes);

// Serve frontend HTML from public/
app.use(express.static(path.join(__dirname, 'public')));

// Fallback message for unexpected POST to root
app.post('/', (req, res) => {
  res.status(405).send('❌ Use POST /api/upload instead.');
});

// Optional friendly GET for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Cataloging API is running on http://localhost:${PORT}`);
});
