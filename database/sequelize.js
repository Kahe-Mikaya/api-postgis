import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres','postgres','postgres',{
    host: 'localhost',
    dialect: 'postgres'
})

async function connect() {
    try{
        await sequelize.authenticate();
        console.log("autenticou no sequelize")
    }catch(error){
        console.log("deu pau",error)
    }
}
connect();

export default sequelize;