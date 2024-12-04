import dotenv from "dotenv";
dotenv.config();
import pg from 'pg'
const { Client } = pg


const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

conectar();

async function conectar(){
    await client.connect();
}
export default client;