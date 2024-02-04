import { Request, Response } from "express";
import { UserService } from '../service/UserService'



class UserController {
    createUser = (request: Request, response: Response) => {
        const user = request.body
        const userService = new UserService()
        // se estiver nulo ou indefinido 
        if (!user.email) {
            return response.status(400).json({ message: "Bad request !" })
        }
        userService.createUser(user.name, user.email)


        return response.status(201).json({ message: "criando o usuário com sucesso !" })


    }

    getAll = (request: Request, response: Response) => {
        const userService = new UserService()

        const users = userService.getAll()
        return response.status(200).json(users)
    }


}


export { UserController }