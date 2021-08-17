import {Request, Response} from 'express'

import connection from '../database/connection'
class PadsController {

   async index (request: Request, response: Response){
       const pads = await connection('pads').select('*')

       const serializePads = pads.map(pad => {
           return {
               ...pad,
               pad_url: `http://localhost:3333/uploads/pads/${pad.link}`
           }
       })

       return response.json(serializePads)
   }
}

export default new PadsController