exports.up = function(knex) { //Usado geralmete para criar uma tabela
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) { //Metodo usado geralmente para deletar
    return knex.schema.dropTable('ongs');
};
