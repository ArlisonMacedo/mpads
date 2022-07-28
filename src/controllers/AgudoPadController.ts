import { Request, Response } from 'express'

import connection from '../database/connection'
class AgudoPadController {

    async index(request: Request, response: Response) {
        const pads = await connection('agudo_pad').select('*')

        const serializePads = pads.map(pad => {
            return {
                ...pad,
                pad_url: `http://191.252.212.139:3333/uploads/agudo_pad/${pad.link}`
            }
        })

        return response.json(serializePads)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const pad = await connection('agudo_pad')
            .where('id', String(id))
            .first()
            .select('*')

        const serializePad = {
            ...pad,
            pad_url: `http://191.252.212.139:3333/uploads/agudo_pad/${pad.link}`
        }

        return response.json(serializePad)
    }
}

export default new AgudoPadController