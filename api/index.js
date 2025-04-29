import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import User from './models/User.js';

dotenv.config();
db.connect();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'API is running locally...' });
});

const PORT = process.env.PORT || 3000;

if (process.env.VERCEL) {
  module.exports = app; // Exporte a app para o Vercel
} else {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });
}
