const livroexp = require ("./livro-schema")

const create = (body) => livroexp.create(body);

const find = () => livroexp.find(); 

//module.exports = {create,find,}
module.exports = {create}