import pg from 'pg'
const { Client } = pg
const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

async function conectar() {
    try {
        await client.connect();
        const res = await client.query('SELECT $1::text as message', ['Hello world!'])
        console.log(res.rows[0].message) // Hello world!
     } 
     
     catch (err) {
        console.error(err);
     } 
     
     finally {
        await client.end()
     }
}

conectar();