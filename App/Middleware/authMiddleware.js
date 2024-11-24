const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']; // O token deve ser passado no cabeçalho Authorization

    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido.' });
    }

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido.' });
        }

        req.userId = decoded.id; // Armazena o ID do usuário decodificado na requisição
        next(); // Chama o próximo middleware ou rota
    });
};

module.exports = authMiddleware; 