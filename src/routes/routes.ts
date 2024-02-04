import { Request, Response, Router } from 'express'

import { UserController } from '../controller/UserController'

const routes = Router()

const userController = new UserController()

routes.post("/user", userController.createUser)
routes.get("/user", userController.getAll)
routes.delete("/user", (request: Request, response: Response) => {
    return response.status(200).json({ message: 'Usuario deletado' })
})


export { userController }








export { routes }




