import { Request, Response } from 'express'

import connection from '../database/connection'
class OrganChoirPadController {

    async index(request: Request, response: Response) {
        const pads = await connection('organ_choir_pad').select('*')

        const serializePads = pads.map(pad => {
            return {
                ...pad,
                pad_url: `http://193.161.193.99:38026/uploads/organ_choir_pad/${pad.link}`
            }
        })

        return response.json(serializePads)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const pad = await connection('organ_choir_pad')
            .where('id', String(id))
            .first()
            .select('*')

        const serializePad = {
            ...pad,
            pad_url: `http://193.161.193.99:38026/uploads/organ_choir_pad/${pad.link}`
        }

        return response.json(serializePad)
    }
}

export default new OrganChoirPadController