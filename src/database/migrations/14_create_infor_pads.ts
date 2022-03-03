import Knex from 'knex'

export async function up (knex: Knex) {
    return await knex.schema.createTable('infor_pads', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('thumbnail')
        table.integer('star')
    })
}

export async function down (knex: Knex){
    return await knex.schema.dropTable('infor_pads')
}