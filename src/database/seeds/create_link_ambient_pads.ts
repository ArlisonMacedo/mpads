import Knex from "knex";

export async function seed (knex: Knex){
    await knex('ambient_pads').insert([
        {name: 'A', link: 'PADA.mp3'},
        {name: 'A#', link: 'PADAb.mp3'},
        {name: 'B', link: 'PADB.mp3'},
        {name: 'C', link: 'PADC.mp3'},
        {name: 'C#', link: 'PADCb.mp3'},
        {name: 'D', link: 'PADD.mp3'},
        {name: 'D#', link: 'PADDb.mp3'},
        {name: 'E', link: 'PADE.mp3'},
        {name: 'F', link: 'PADF.mp3'},
        {name: 'F#', link: 'PADFb.mp3'},
        {name: 'G', link: 'PADG.mp3'},
        {name: 'G#', link: 'PADGb.mp3'},
    ])
}