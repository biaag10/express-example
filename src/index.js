import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import { connect } from './database/configdb.js';

dotenv.config();

const app = express();
app.use(express.json()); // Para aceitar JSON no corpo das requisições

// Conectar ao banco de dados
connect();

// Usar as rotas de usuários
app.use('/api/users', userRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
