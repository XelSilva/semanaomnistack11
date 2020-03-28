const express = require('express'); //Importando modulo EXPRESS para  a varivel express

const app = express(); //cRIO UMA VARIAVEL PARA ARMAZENAR MINHA APLICAÇÃO

app.use(express.json()); //Ir no corpo da requisiçaõ e converter em JSON
/**
 * Rota e Recursos
 */

/** Metodos HTTP**
 * GET: Buscar/Listar uam informaçaõ do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * Delete: Deletar uuma informação no back-end
 */

/** TIPOS DE PARAMETROS**
 *  Query Params: Parametros nomeados enviados na rota após "?" (Filtros, Paginação)
 *  Route Params: Parametros utilizados para identificar recursos (UNICO RECURSO)
 *  Request Body: CorpodaRequisição, utilizado para criar ou alterar recursos (o resto)
 */

/** TIPOS DE BANCOS DE DADOS**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * nOsql: MongoDB, CouchDB, etc
 */

/** 3 FROMAS PARA INSTALAR O BANCO DE DADOS **
 * Drier: SELECT * FROM users
 * qUERY bUILDER: table('users').select('*).where()
 */

app.post('/users', (request, response) => {
    //const params = request.query; //Usado Request Params
    //const params = request.params; //Usado Routes Params
    const body = request.body;

    console.log(body);

    //return response.send('Hello Word'); //Resposta em modop text
    return response.json({
        evento: 'Semana OmniStack',
        Aluno: 'Alex Silva'
    });
});

app.listen(3333); //Ouve minha porta por uma rota