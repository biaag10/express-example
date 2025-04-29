import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Definindo o modelo do usuário com o campo `username`
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },  // Adicionando `username`
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Método para comparar senhas
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

// Middleware para criptografar a senha antes de salvar
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
