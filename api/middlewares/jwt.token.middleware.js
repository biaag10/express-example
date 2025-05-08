import jwt from 'jsonwebtoken';

// middleware para verificar o token JWT
const verifyToken = (req, res, next) => {
    try {
        // Tenta pegar do header Authorization
        let token = req.headers['authorization']?.split(' ')[1];

        // Se não encontrar no header, tenta pegar do cookie
        if (!token && req.cookies?.token) {
            token = req.cookies.token;
        }

        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Token inválido' });
            }

            req.userId = decoded.userId;
            next();
        });
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

export default verifyToken;
