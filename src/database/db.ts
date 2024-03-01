import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'postgres', 
    host: 'localhost', 
    username: 'postgres', 
    password: '12345678', 
    database: 'mvc-architeture', 
    define: {
        timestamps: true,
        underscored: true 
    }
})

export default sequelize