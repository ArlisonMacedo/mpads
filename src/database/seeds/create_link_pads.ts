import Knex from "knex";

export async function seed (knex: Knex){
    await knex('pads').insert([
        {name: 'A', link: 'A-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'A#', link: 'Ab-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'B', link: 'B-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'C', link: 'C-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'C#', link: 'Cb-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'D', link: 'D-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'D#', link: 'Db-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'E', link: 'E-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'F', link: 'F-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'F#', link: 'Fb-WARM-CHURCHFRONTPADS.mp3'},
        {name: 'G#', link: 'Gb-WARM-CHURCHFRONTPADS.mp3'},
    ])
}