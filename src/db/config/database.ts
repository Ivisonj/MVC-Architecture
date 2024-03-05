import 'dotenv/config'
import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    host: process.env.HOST_DB,
    dialect: "postgres"
})