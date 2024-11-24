require('dotenv').config();

const uniqueAuthMiddleware = (req, res, next) => {
    const userId = req.userId; // O ID do usuário deve ser obtido do token JWT
    const paramId = req.params.id; // O ID do usuário a ser alterado deve ser obtido dos parâmetros da rota
    const authorizedUserIds = process.env.AUTHORIZED_USER_IDS.split(','); // Converte a string em um array

    // Verifica se o ID do usuário é um dos autorizados ou se está tentando alterar seus próprios dados
    if (authorizedUserIds.includes(userId.toString()) || userId.toString() === paramId) {
        return next(); // Permite a alteração
    }

    return res.status(403).json({ message: 'Acesso negado. Você só pode alterar seus próprios dados.' });
};

module.exports = uniqueAuthMiddleware;