import { Router } from "express"
import { postController } from "../controller/contact"

const router = Router()

router.post("/contact", postController)

export default router
