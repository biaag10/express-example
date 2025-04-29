import bcrypt from "bcryptjs";
import User from "../models/User.js";

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

export default { register };