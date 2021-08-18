import {Request, Response} from 'express'
import connection from '../database/connection'

class AmbientPadsController {
    async index (request: Request, response: Response) {
        const ambientPads = await connection('ambient_pads')
            .select('*')
        
        const serializeAmbientPads = ambientPads.map(ambientPad => {
            return {
                ...ambientPad,
                ambient_pad_url: `http://localhost:3333/uploads/ambient-pad/${ambientPad.link}`
            }
        })

        return response.json(serializeAmbientPads)
    }

    async show (request: Request, response: Response) {
        const { id } = request.params

        const ambientPad = await connection('ambient_pads')
            .where('id', String(id))
            .first()
            .select('*')
        
        const serializeAmbientPad = {
            ...ambientPad,
            ambient_pad_url: `http://localhost:3333/uploads/ambient-pad/${ambientPad.link}`
        }

        return response.json(serializeAmbientPad).status(200)
    }
}

export default new AmbientPadsController