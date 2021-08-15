import {Router} from 'express'
import PadsController from './controllers/PadsController'

const routes = Router()


routes.get('/pads', PadsController.index)


export default routes