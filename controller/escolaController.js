import Escola from "../model/Escola.js";

export async function listarEscolas(req,res)
{
   const escolas = await Escola.findAll();
   res.json(escolas); 
}

export async function criarEscola(req,res) 
{
    const escola = await Escola.create(req.body)
    res.json(escola);    
}

export async function excluirEscola(req,res) {
    const escola = await Escola.findByPk(req.params.id)
    if(!escola){
        res.status(404).send("Escola nao encontrada")
        return
    }
    await escola.destroy();
    res.json(escola);

}

export async function buscarEscola(req,res) {
    const escola = Escola.findByPk(req.params.id)
    if(!escola){
        res.status(404).send("escola nao encontrada")
    }
    res.json(escola);    
}

export async function atualizarEscola(req,res) {
    try
    {
        const escola = Escola.findByPk(req.params.id);
        if(!escola){
            res.status(404).send("Escola nao encontrada")
            return
        }
        await escola.set(req.body);
        await escola.save();
        res.json(escola);
    }
    catch(err)
    {
        res.status(400).send(err.errors[0].message);
    }
    
}


