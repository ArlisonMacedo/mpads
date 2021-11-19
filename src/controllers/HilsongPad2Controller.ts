import { Request, Response } from 'express'

import connection from '../database/connection'
class HilsongPad2Controller {

    async index(request: Request, response: Response) {
        const pads = await connection('hilsong_pad_2').select('*')

        const serializePads = pads.map(pad => {
            return {
                ...pad,
                pad_url: `http://193.161.193.99:38026/uploads/hilsong_pad_2/${pad.link}`
            }
        })

        return response.json(serializePads)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const pad = await connection('hilsong_pad_2')
            .where('id', String(id))
            .first()
            .select('*')

        const serializePad = {
            ...pad,
            pad_url: `http://193.161.193.99:38026/uploads/hilsong_pad_2/${pad.link}`
        }

        return response.json(serializePad)
    }
}

export default new HilsongPad2Controller