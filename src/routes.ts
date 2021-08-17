import {Router} from 'express'
import PadsController from './controllers/PadsController'

const routes = Router()


routes.get('/pads', PadsController.index)
routes.get('/pads/:id', PadsController.show)


export default routes