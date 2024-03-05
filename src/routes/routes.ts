import { Router } from 'express'

import createUserController from '../controllers/createUserController'
import findUsersController from '../controllers/findUsersController'
import findUserByIdController from '../controllers/findUserByIdController'

const routes = Router()

//create user
routes.post('/create', createUserController)

//find users
routes.get('/users', findUsersController)

//find user by id
routes.get('/user/:id', findUserByIdController)

export default routes