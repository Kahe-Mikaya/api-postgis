import express from 'express'
import { atualizarEscola, buscarEscola, criarEscola, excluirEscola, listarEscolas } from '../controller/escolaController.js';

const escolaRouter = express.Router();
escolaRouter.get('/',listarEscolas);
escolaRouter.post('/',criarEscola);
escolaRouter.delete('/:id',excluirEscola)
escolaRouter.get('/:id',buscarEscola)
escolaRouter.patch('/:id',atualizarEscola)

export default escolaRouter;