import { Request, Response } from 'express'
import User from "../db/models/User"

const updateUserController = async (req: Request, res: Response) => {
    try {
        const { name, email, age } = req.body

        const user = await User.findOne({
            where: { id: req.params.id }
        })

        if(user) {
            await user.update({ name, email, age })
            return res.status(200).send('Usuário editado com sucesso!')
        } else {
            return res.status(400).send('Usuário não encontrado')
        }
    } catch(error) {
        return res.status(500).send('Ocorreu um erro ao editar o usuários')
    }
}

export default updateUserController