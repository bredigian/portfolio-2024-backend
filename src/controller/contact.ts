import { Request, Response } from "express"

import { TEmail } from "../types/email.types"
import { sendEmail } from "../services/contact"

export const postController = async (req: Request, res: Response) => {
  try {
    const payload: TEmail = req?.body
    const { name, email, message } = payload
    const isEmpty = !name || !email || !message

    if (isEmpty)
      throw new Error("Los atributos son requeridos o están incompletos.")

    await sendEmail(payload)

    res.status(201).json({ message: "Email enviado exitosamente." })
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ message: error.message })
  }
}
