
import { Model, DataTypes } from "sequelize";
import { sequelize } from '../config/database'

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users', 
    timestamps: false, 
    sequelize
})

export default User
