import mongoose from 'mongoose';

// modelo de usuário
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,  
      unique: true, // garante que o nome de usuário seja único
    },
    password: {
      type: String,
      required: true,
      select: false, // não retorna a senha ao buscar usuários
    }
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
