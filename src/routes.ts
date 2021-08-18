import {Router} from 'express'
import PadsController from './controllers/PadsController'
import AmbientPadsController from './controllers/AmbientPadsController'

const routes = Router()


routes.get('/pads', PadsController.index)
routes.get('/pads/:id', PadsController.show)
routes.get('/ambient_pads/', AmbientPadsController.index)
routes.get('/ambient_pads/:id', AmbientPadsController.show)


export default routes