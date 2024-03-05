import { Router } from 'express'

import createUserController from '../controllers/createUserController'

const routes = Router()

//create user
routes.post('/create', createUserController)

export default routes