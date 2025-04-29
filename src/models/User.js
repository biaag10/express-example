import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// modelo de usuário
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'O nome é obrigatório!'],  
    },
    email: {
      type: String,
      required: [true, 'O email é obrigatório!'],
      unique: [true, 'Este email já está registrado!'],  // garante que o email seja único
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        'Por favor, forneça um email válido!',  // valida o formato do email
      ],
    },
    password: {
      type: String,
      required: [true, 'A senha é obrigatória!'],
      select: false, // senha não é retornada nas consultas por padrão
    },
  },
  {
    timestamps: true, // registra quando o usuário foi criado ou atualizado
  }
);

// método para comparar senhas
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// middleware para criptografar a senha antes de salvar
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // se a senha não foi modificada, não há necessidade de criptografar
  this.password = await bcrypt.hash(this.password, 10);  // criptograa senha com bcrypt
  next();
});

// cria o modelo de Usuário
const User = mongoose.model('User', UserSchema);

export default User;
