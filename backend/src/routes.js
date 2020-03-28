const express = require('express'); //Importando o modulo express para uma variavel EXPRESS

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); //Desacomplando o modulo de rotas do express para uma variavel

/** LISTAR CADASTRO DE ONGS **/
routes.get('/ongs', OngController.index);
/** CRIAR CADASTRO DE ONGS **/
routes.post('/ongs', OngController.create);


/** LISTAR os Casos DE ONGS **/
routes.get('/incidents', IncidentController.index);
/** CRIAR CADASTRO acidentes DE ONGS **/
routes.post('/incidents', IncidentController.create);
/** DELETAR os Casos DE UMA ONGS **/
routes.delete('/incidents/:id', IncidentController.delete);


/**listaR Casos DE UMA ONGS **/
routes.get('/profile', ProfileController.index);


/**LOGIN DE UMA ONGS **/
routes.post('/sessions', SessionController.create);

module.exports = routes; //Exportar rotas para uma variave4l de um arquivo
