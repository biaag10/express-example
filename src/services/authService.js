// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// export const registerUser = async (name, email, password) => {
//   const user = new User({ name, email, password });
//   await user.save();
//   return user;
// };

// export const loginUser = async (email, password) => {
//   const user = await User.findOne({ email });
//   if (!user) throw new Error('Usuário não encontrado');

//   const isMatch = await user.comparePassword(password);
//   if (!isMatch) throw new Error('Senha incorreta');

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   return { token, user };
// };
