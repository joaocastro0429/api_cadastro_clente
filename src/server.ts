import express, { Request, Response } from 'express'
import { routes } from './routes/routes'

const server = express()

server.use(express.json())
server.use(routes)


server.get("/", (request: Request, response: Response) => {
    return response.json({ message: "Apredendo API com node e typescript" })
})


server.listen(3333)