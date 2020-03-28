const express = require('express'); //Importando modulo EXPRESS para  a varivel express

const app = express(); //cRIO UMA VARIAVEL PARA ARMAZENAR MINHA APLICAÇÃO

app.get('/', (resquest, response) => {
    //return response.send('Hello Word'); //Resposta em modop text
    return response.json({
        evento: 'Semana OmniStack',
        Aluno: 'Alesx Silva'
    });
});

app.listen(3333); //Ouve minha porta por uma rota