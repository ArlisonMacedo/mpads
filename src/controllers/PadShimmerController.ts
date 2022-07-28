import { Request, Response } from 'express'

import connection from '../database/connection'
class PadShimmerController {

    async index(request: Request, response: Response) {
        const pads = await connection('pad_shimmer').select('*')

        const serializePads = pads.map(pad => {
            return {
                ...pad,
                pad_url: `http://191.252.212.139:3333/uploads/pad_shimmer/${pad.link}`
            }
        })

        return response.json(serializePads)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const pad = await connection('pad_shimmer')
            .where('id', String(id))
            .first()
            .select('*')

        const serializePad = {
            ...pad,
            pad_url: `http://191.252.212.139:3333/uploads/pad_shimmer/${pad.link}`
        }

        return response.json(serializePad)
    }
}

export default new PadShimmerController