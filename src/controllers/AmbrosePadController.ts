import { Request, Response } from 'express'

import connection from '../database/connection'
class AmbrosePadController {

    async index(request: Request, response: Response) {
        const pads = await connection('ambrose_pad').select('*')

        const serializePads = pads.map(pad => {
            return {
                ...pad,
                pad_url: `http://193.161.193.99:38026/uploads/ambrose_pad/${pad.link}`
            }
        })

        return response.json(serializePads)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const pad = await connection('ambrose_pad')
            .where('id', String(id))
            .first()
            .select('*')

        const serializePad = {
            ...pad,
            pad_url: `http://193.161.193.99:38026/uploads/ambrose_pad/${pad.link}`
        }

        return response.json(serializePad)
    }
}

export default new AmbrosePadController