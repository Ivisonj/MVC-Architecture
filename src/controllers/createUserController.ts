import { Request, Response } from 'express'
import User from "../db/models/User"

const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, email, age } = req.body

        if(!name || !email || age == null) {
            return res.status(400).send('Dados do usuário incompletos.')
        }

        const existsUser = await User.findOne({
            where: { email: email }
        })
        
        if(existsUser) {
            return res.status(409).send('O email informado já é utilizado.')
        }

        const userCreated = await User.create({ name, email, age })
        return res.status(201).send('Usuário criado com sucesso!')
    } catch (error) {
        return res.status(500).send('Ocorreu um erro ao criar o usuário.')
    }
}

export default createUserController