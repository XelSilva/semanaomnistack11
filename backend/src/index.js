const express = require('express'); //Importando modulo EXPRESS para  a varivel express
const routes = require('./routes'); //Importa minhas rotas do arquivo ROUTES
const cors = require('cors');

const app = express(); //cRIO UMA VARIAVEL PARA ARMAZENAR MINHA APLICAÇÃO

app.use(express.json()); //Ir no corpo da requisiçaõ e converter em JSON
app.use(cors());
app.use(routes);

app.listen(3333); //Ouve minha porta por uma rota