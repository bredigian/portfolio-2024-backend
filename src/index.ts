import "dotenv/config"

import Express from "express"
import contactRouter from "./routes/contact"
import cors from "cors"

const app = Express()
app.use(Express.json())
app.use(cors())
app.use(contactRouter)

const PORT = process.env.PORT ?? 3001
app.listen(PORT, () =>
  console.log(
    `Gianluca Bredice Vivarelli Portoflio's Backend running on PORT ${PORT}`
  )
)
