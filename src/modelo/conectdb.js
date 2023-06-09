const mongoose = require('mongoose');

const Bancodb = () => {
    console.log("Connecting to DB!!...");

    mongoose.connect("mongodb+srv://miasp:miasp@clustermiaspe.9nfigwo.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).then(() =>console.log("Connected !!...")).catch(("Erro...in Connect !!..."));//, console.log("in Connect !!..."));(mongodb+srv://miasp:<password>@clustermiaspe.9nfigwo.mongodb.net/ )
};

module.exports = Bancodb;