const db = [
    {
        name: "joao",
        email: "joao@gmail.com"

    }
]


export class UserService {
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        db.push(user)
        console.log("atualizado ", db)
    }

    getAll = () => {
        return db
    }


}


