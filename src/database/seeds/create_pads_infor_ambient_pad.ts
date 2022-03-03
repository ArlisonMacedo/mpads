import Knex from "knex";


export async function seed(knex: Knex) {
  await knex('infor_pads').insert([
    {
      name: 'AMBIENT PADS',
      thumbnail: 'https://i.imgur.com/0jt6FHz.jpg',
      star: 5
    },
    {
      name: 'GUITAR PADS',
      thumbnail: 'https://i.imgur.com/3ig0cM1.jpg',
      star: 5
    },
    {
      name: 'HILLSONG PADS',
      thumbnail: 'https://imgur.com/JaqTxd4.jpg',
      star: 5
    },
    {
      name: 'MOTIONS PADS',
      thumbnail: 'https://imgur.com/d0NblpP.jpg',
      star: 5
    },
    {
      name: 'SHIMMER PADS',
      thumbnail: 'https://imgur.com/jjdDwMv.jpg',
      star: 5
    },
    {
      name: 'WARM PADS',
      thumbnail: 'https://imgur.com/xGY4cPg.jpg',
      star: 5
    }
  ])
}