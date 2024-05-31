import Mail from "nodemailer/lib/mailer"
import { TEmail } from "../types/email.types"
import transporter from "../config/nodemailer"

const EMAIL_HOST = process.env.SMTP_USER

export const sendEmail = async (payload: TEmail) => {
  try {
    const { name, email, message } = payload

    const options: Mail.Options = {
      subject: `¡${name} te ha enviado un mensaje mediante el formulario de contacto de tu Portfolio!`,
      from: `${name} <${email}>`,
      to: EMAIL_HOST,
      html: `
            <div style="display: block; padding: 16px">
                <p>${message}</p>
                <p>Enviado por <b>${name}<b> para ${EMAIL_HOST}</p>
            </div>
        `,
    }
    await transporter.sendMail(options)
  } catch (error) {
    throw new Error("Failed to send email.")
  }
}
