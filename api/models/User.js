import mongoose from 'mongoose';

// modelo de usuário
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,  
    },
    password: {
      type: String,
      required: true,
    }
  }
);

const User = mongoose.model('User', UserSchema);

export default User;
