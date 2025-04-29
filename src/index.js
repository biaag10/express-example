import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import User from './models/User.js';

dotenv.config();
db.connect();

const app = express();
app.use(express.json()); // para aceitar JSON no corpo das requisições

app.get('/', (req, res) => {
  res.send({message: 'API is running...'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}/`);
});
