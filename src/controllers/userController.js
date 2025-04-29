import { registerUser, loginUser } from '../services/authService.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    res.status(201).json({ message: 'Usuário criado com sucesso', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ message: 'Login bem-sucedido', token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const protectedRoute = (req, res) => {
  res.status(200).send('Acesso autorizado');
};
