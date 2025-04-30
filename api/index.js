import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import userRoutes from './routes/user.route.js'; // importa as rotas de usuário
import User from './models/User.js'; // cria a collection de users
import exampleRoute from './routes/protected.route.js'; 

dotenv.config();
db.connect();

const app = express();
app.use(express.json()); // para aceitar JSON no corpo das requisições

app.use("/users", userRoutes); // define o prefixo para as rotas de usuário
app.use("/secure", exampleRoute); // define o prefixo para as rotas de exemplo

app.get('/', (req, res) => {
  res.send({message: 'API is running...'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}/`);
});
