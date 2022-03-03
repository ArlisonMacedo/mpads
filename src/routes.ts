import {Router} from 'express'
import PadsController from './controllers/PadsController'
import PadShimmerController from './controllers/PadShimmerController'
import MotionsPadController from './controllers/MotionsPadController'
import HilsongPadController from './controllers/HilsongPadController'
import AmbientPadController from './controllers/AmbientPadController'
import GuitarPadControllers from './controllers/GuitarPadControllers'
import AgudoPadController from './controllers/AgudoPadController'
import AmbrosePadController from './controllers/AmbrosePadController'
import BethelPadController from './controllers/BethelPadController'
import EnvolvingPadController from './controllers/EnvolvingPadController'
import HilsongPad2Controller from './controllers/HilsongPad2Controller'
import OrganChoirPadController from './controllers/OrganChoirPadController'
import WorshipSolutionPadController from './controllers/WorshipSolutionPadController'
import InforPadsController from './controllers/InforPadsController'


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
routes.get('/guitar_pad', GuitarPadControllers.index)
routes.get('/guitar_pad/:id', GuitarPadControllers.show)

/** INFOR PADS */
routes.get('/infor_pads', InforPadsController.index)

/** NEXT UPDATEDING */

routes.get('/agudo_pad', AgudoPadController.index)
routes.get('/agudo_pad/:id', AgudoPadController.show)
//
routes.get('/ambrose_pad', AmbrosePadController.index)
routes.get('/ambrose_pad/:id', AmbrosePadController.show)
//
routes.get('/bethel_pad', BethelPadController.index)
routes.get('/bethel_pad/:id', BethelPadController.show)
//
routes.get('/envolving_pad', EnvolvingPadController.index)
routes.get('/envolving_pad/:id', EnvolvingPadController.show)
//
routes.get('/hilsong_pad_2', HilsongPad2Controller.index)
routes.get('/hilsong_pad_2/:id', HilsongPad2Controller.show)
//
routes.get('/organ_choir_pad', OrganChoirPadController.index)
routes.get('/organ_choir_pad/:id', OrganChoirPadController.show)
//
routes.get('/worship_solution_pad', WorshipSolutionPadController.index)
routes.get('/worship_solution_pad/:id', WorshipSolutionPadController.show)



export default routes