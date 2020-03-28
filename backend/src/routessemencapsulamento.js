const express = require('express'); //Importando o modulo express para uma variavel EXPRESS
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router(); //Desacomplando o modulo de rotas do express para uma variavel

/** LISTAGEM DE CADASTROS DE ONGS DE FORMA NÃO CAPSULADA**/
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});


/** ADICIONAR DADOS DE ONGS **/
routes.post('/ongs', async (request, response) => {
    //const data = request.body; //Pega tudo 
    
    const { name, email, whatsapp, city, uf } = request.body; //Pega dados separados dentro de uma variavel
    
    const id = crypto.randomBytes(4).toString('HEX');//Gera o ID ALEATORIO pelo CRYPTO

    await connection('ongs').insert({ //Vai aguarda para depois continuar
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id }); //Devolve apenasno ID
});

module.exports = routes; //Exportar rotas para uma variave4l de um arquivo
