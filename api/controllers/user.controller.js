import UserService from '../services/user.service.js';

// Função de registro
const register = async (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(400).json({ message: 'Nome, Nome de usuário, Email e senha são obrigatórios!' });
    }

    try {
        const newUser = await UserService.register(name, username, email, password);
        return res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
    } catch (error) {
        console.error('Erro ao registrar o usuário:', error);
        return res.status(400).json({ message: error.message });
    }
};

// função de login
// loga com email ou username
const login = async (req, res) => {
    const { username, email, password } = req.body;

    if ((!email && !username) || !password) {
        return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios. Ou Email e senha são obrigatórios!' });
    }

    try {
        const token = await UserService.login(username || email, password);

        // salvar o token em cookie HTTPOnly
        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // true em produção com HTTPS
            sameSite: 'strict',
            maxAge: 3600000 // 1 hora
        });

        return res.status(200).json({ message: 'Login bem-sucedido' }); // <-- token não é retornado
    } catch (error) {
        console.error('Erro no login:', error);
        return res.status(401).json({ message: error.message });
    }
};


const logout = async (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logout realizado com sucesso' });
}

export default { register, login, logout };
