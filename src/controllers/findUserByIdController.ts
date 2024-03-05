import { Request, Response } from 'express'
import User from "../db/models/User"

const findUserByIdController = async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id)

        if(user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send('Usuário não encontrado')
        }
    } catch(error) {
        return res.status(500).send('Ocorreu um erro ao buscar o usuários')
    }
}

export default findUserByIdController