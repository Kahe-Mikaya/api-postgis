import dotenv from "dotenv";

import express from 'express';
import client from './database/postgre.js';
import sequelize from './database/sequelize.js';
import Escola from "./model/Escola.js";
import escolaRouter from "./router/EscolaRouter.js";

const app = express();
app.use(express.json());

app.use('/escolas',escolaRouter);



app.get('/svg/:estado/:municipio', async(req,res) => {
   let estado = req.params.estado;
    let municipio = req.params.municipio;
    let pathEstado = await client.query('SELECT ST_AsSVG(geom) estado WHERE nome ilike $1',[estado]);
    let pathMunicipio = await client.query('SELECT ST_AsSVG(geom) FROM municipio WHERE nome ilike $1',[municipio]);
    let viewBox = await client.query('SELECT getViewBox($1)',[estado]);

    res.json({
        pathestado: pathEstado.rows[0].st_assvg,
        pathmunicipio: pathMunicipio.rows[0].st_assvg,
        viewBox: viewBox.rows[0].getviewbox
  });
   
});
app.listen(3000,()=> {
   console.log('Aplicaçao rodando na porta: 3000')
})

export default client;