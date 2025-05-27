import express from 'express';
import catalogRoutes from './routes/catalog.js';

const app = express();
app.use(express.json());
app.use('/api', catalogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Cataloging API is running on port ${PORT}`);
});
