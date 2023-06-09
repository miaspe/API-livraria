console.log("MI-Livraria");

const express = require ("express");
const route = require ("./src/routes/route")
const app = express();
const Bancodb = require ("./src/modelo/conectdb")

const port = 3030

Bancodb()
app.use(express.json());
app.use("/user" , route);

app.listen (port, () => console .log( `porta ${port}`));