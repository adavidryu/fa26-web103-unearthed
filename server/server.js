import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import giftsRouter from './routes/gifts.js';

const app = express();
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use(express.static('./public'));
app.get('/style.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/style.css'));
});
app.use('/gifts', giftsRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
});

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'public/404.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
