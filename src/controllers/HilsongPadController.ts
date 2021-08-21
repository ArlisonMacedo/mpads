import { Request, Response } from 'express'

import connection from '../database/connection'
class MotionsPadController {

    async index(request: Request, response: Response) {
        const pads = await connection('hilsong_pad').select('*')

        const serializePads = pads.map(pad => {
            return {
                ...pad,
                pad_url: `http://localhost:3333/uploads/motions_pad/${pad.link}`
            }
        })

        return response.json(serializePads)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const pad = await connection('hilsong_pad')
            .where('id', String(id))
            .first()
            .select('*')

        const serializePad = {
            ...pad,
            pad_url: `http://localhost:3333/uploads/motions_pad/${pad.link}`
        }

        return response.json(serializePad)
    }
}

export default new MotionsPadController