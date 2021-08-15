import Knex from "knex";

export async function seed (knex: Knex){
    await knex('pads').insert([
        {name: 'G#', link: 'GWARMCHURCHFRONTPADS.mp3'},
        {name: 'F#', link: 'F-#-WARM-CHURCHFRONTPADS.mp3'}
    ])
}