const nodemailer = require('nodemailer');

module.exports = (router) => {
    // Rota para enviar e-mail para suporte
    router.post('/sendEmail-mlj', async (req, res) => {
        try {
            const { email, subject, message } = req.body; // Obtém os dados do corpo da requisição

            // Configuração do transportador de e-mail
            const transporter = nodemailer.createTransport({
                service: 'gmail', // Usando o Gmail
                auth: {
                    user: 'seu-email@gmail.com', // Seu e-mail
                    pass: 'sua-senha-de-aplicativo' // Senha de aplicativo gerada
                }
            });

            // Configuração do e-mail
            const mailOptions = {
                from: email, // E-mail do remetente
                to: 'henriqueestrela2004@gmail.com', // E-mail do suporte
                subject: subject,
                text: message
            };

            // Envia o e-mail
            await transporter.sendMail(mailOptions);
            res.status(200).send("E-mail enviado com sucesso!"); // Resposta de sucesso
        } catch (error) {
            res.status(400).json({ message: error.message }); // Resposta de erro
        }
    });
};