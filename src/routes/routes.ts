import { Router } from 'express'

import createUserController from '../controllers/createUserController'
import findUsersController from '../controllers/findUsersController'
import findUserByIdController from '../controllers/findUserByIdController'
import updateUserController from '../controllers/updateUserController'
import deleteUserController from '../controllers/deleteUserController'

const routes = Router()

//create user
routes.post('/api/create', createUserController)

//find users
routes.get('/api/users', findUsersController)

//find user by id
routes.get('/api/user/:id', findUserByIdController)

//update user
routes.put('/api/edit/:id', updateUserController)

//delete user
routes.delete('/api/delete/:id', deleteUserController)

export default routes