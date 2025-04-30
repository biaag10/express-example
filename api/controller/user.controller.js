import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Função para registrar um novo usuário
const register = async (req, res) => {
    console.log('Registro de usuário: ', req.body);

    if ( !req.body || !req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios!' });
    }

    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const savedUser = await User.create({
            username,
            password: hashedPassword
        });
        console.log('Usuário salvo: ', savedUser);
        return res.status(201).json({ message: 'Usuário registrado com sucesso', user: savedUser });
    } catch (error) {
        console.error('Erro ao salvar usuário: ', error);
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
    }

}

const login = async (req, res) => {
    console.log('Login de usuário: ', req.body);

    if ( !req.body || !req.body.username || !req.body.password) {
        return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios!' });
    }

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            console.log('Usuário não encontrado: ', username);
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Comparando senhas: ', isMatch);
        if (!isMatch) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }
        console.log('Login bem-sucedido para o usuário: ', user.username);
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // senha correta, você pode retornar o usuário ou um token JWT aqui
        return res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        console.error('Erro ao fazer login: ', error);
        return res.status(500).json({ message: 'Erro ao fazer login' });
    }
}

export default { register, login };