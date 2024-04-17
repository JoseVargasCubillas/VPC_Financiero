import nodemailer from "nodemailer";

const emailRegistro = async (email, nombre, token) => {
    // Credenciales de Mailtrap 
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "e2689ceb557af6",
          pass: "186533017628f0"
        }
    });
    

    // Envíar el Email
    const info = await transport.sendMail({
        from: 'APV - Administrador de Pacientes de Veterinaria',
        to: email,
        subject: 'Comprueba tu cuenta en APV',
        text: 'Comprueba tu cuenta en APV',
        html: `
        <p>Hola ${nombre}! Comprueba tu cuenta en APV.</p>
        <p>
            Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
        </p>
        <p>Si no fuiste tu quien creó la cuenta. Por favor ignora este mensaje</p>
        `
    });

    console.log(`Email enviado: ${info.messageId}`)
}

export default emailRegistro;