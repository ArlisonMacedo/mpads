import Knex from 'knex'

export async function up (knex: Knex) {
    return await knex.schema.createTable('pad_shimmer', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('link')
    })
}

export async function down (knex: Knex){
    return await knex.schema.dropTable('pad_shimmer')
}