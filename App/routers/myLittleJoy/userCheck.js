require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const nodemailer = require('nodemailer');

module.exports = (router) => {
    // Rota para enviar e-mail para suporte
    router.post('/sendEmail-mlj', async (req, res) => {
        try {
            const { email, subject, message } = req.body; 

            // Configuração do transportador de e-mail
            const transporter = nodemailer.createTransport({
                service: 'gmail', 
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS 
                }
            });

            // Configuração do e-mail
            const mailOptions = {
                from: email, 
                to: 'henriquecer0@gmail.com', 
                subject: subject,
                text: message
            };

            // Envia o e-mail
            await transporter.sendMail(mailOptions);
            res.status(200).send("E-mail enviado com sucesso!"); 
        } catch (error) {
            res.status(400).json({ message: error.message }); 
        }
    });
};
