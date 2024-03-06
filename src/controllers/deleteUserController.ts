import { Request, Response } from 'express'
import User from "../db/models/User"

const deleteUserController = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        }) 

        if(user) {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).send('Usuário deletado com sucesso!')
        } else {
            return res.status(400).send('Usuário não encontrado!')
        }
    } catch(error) {
        return res.status(500).send('Ocorreu um erro ao deletar o usuários')
    }
}

export default deleteUserController