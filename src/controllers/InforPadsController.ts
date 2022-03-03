import { Response, Request } from "express";
import connection from "../database/connection";


class InforPadsController {
  async index(request: Request, response: Response) {
    const pads_infor = await connection('infor_pads').select('*')

    return response.json(pads_infor)
  }
}

export default new InforPadsController