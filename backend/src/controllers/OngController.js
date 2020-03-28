const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    /** METODO PARA LISTAR AS ONGS **/
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

    return response.json(ongs);
},

     /** METODO PARA CADASTRAR AS ONGS **/
    async create(request, response){ //Função de Criar ONGS
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
    }
};