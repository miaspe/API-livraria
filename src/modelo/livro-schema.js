const mongoose = require ('mongoose');

const livroSchema = new mongoose.Schema({
    id: {type:Number},
    title: {type:String},
    resumo: {type:String},
    author: {type:String},
    publisher: {type:Number},
    Categoria: {type:String}      
});
const livroexp = mongoose.model("livroexp",livroSchema );

//console.log(`MI-Livraria schema ${livroSchema}`);

module.export = livroexp 