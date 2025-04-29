import mongoose from 'mongoose';

const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_DB_HOST, {
      dbName: 'test_db', 
    });
    console.log('Banco de dados conectado com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar ao banco de dados:', error);
  }
};

export { connect };
