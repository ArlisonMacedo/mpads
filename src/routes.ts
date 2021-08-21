import {Router} from 'express'
import PadsController from './controllers/PadsController'
import PadShimmerController from './controllers/PadShimmerController'
import MotionsPadController from './controllers/MotionsPadController'
import HilsongPadController from './controllers/HilsongPadController'
import AmbientPadController from './controllers/AmbientPadController'

const routes = Router()


routes.get('/warm_pads', PadsController.index)
routes.get('/warm_pads/:id', PadsController.show)
routes.get('/pad_shimmer', PadShimmerController.index)
routes.get('/pad_shimmer/:id', PadShimmerController.show)
routes.get('/motions_pad', MotionsPadController.index)
routes.get('/motions_pad/:id', MotionsPadController.show)
routes.get('/hilsong_pad', HilsongPadController.index)
routes.get('/hilsong_pad/:id', HilsongPadController.show)
routes.get('/ambient_pad', AmbientPadController.index)
routes.get('/ambient_pad/:id', AmbientPadController.show)


export default routes