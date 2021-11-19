import Knex from "knex";

export async function seed (knex: Knex){
    await knex('ambrose_pad').insert([
        {name: 'A', link: 'A.mp3'},
        {name: 'A#', link: 'Ab.mp3'},
        {name: 'B', link: 'B.mp3'},
        {name: 'C', link: 'C.mp3'},
        {name: 'C#', link: 'Cb.mp3'},
        {name: 'D', link: 'D.mp3'},
        {name: 'D#', link: 'Db.mp3'},
        {name: 'E', link: 'E.mp3'},
        {name: 'F', link: 'F.mp3'},
        {name: 'F#', link: 'Fb.mp3'},
        {name: 'G', link: 'G.mp3'},
        {name: 'G#', link: 'Gb.mp3'},
    ])
}