const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //Cria a conexao passado como parametro a conexao de developoment

module.exports = connection; //Exporta a nossa conexão com banco de dados