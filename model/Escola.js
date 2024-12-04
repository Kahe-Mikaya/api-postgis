import sequelize from "../database/sequelize.js";
import { DataTypes } from "sequelize";
const Escola  = sequelize.define('escola',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localizacao:{
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false
    }


})

Escola.sync();

export default Escola