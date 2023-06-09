const dao= require("../modelo/livro-dao");

const create = async (req,res) => {
    const {id,title,resumo,author,publisher,Categoria} = req.body ;
    const livro = dao.create(req.body);
    res.status(201).send({
        message:"Created sucess!!",
        id,title,resumo,author,publisher,Categoria,
    })};

const find = async (req,res) => {
    const livros = await dao.Find();
    res.send(livros)        
};
/*
const findid = async (req,res) => {
    const id = await dao.Findid();
    res.send(id)    
};
module.exports = { create,find,findid };
*/

module.exports = { create };