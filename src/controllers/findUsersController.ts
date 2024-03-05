import { Request, Response } from 'express'
import User from "../db/models/User"

const findUsersController = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll()
        return res.status(200).json(users)
    } catch(error) {
        return res.status(500).send('Ocorreu um erro ao buscar o usuários')
    }
}

export default findUsersController