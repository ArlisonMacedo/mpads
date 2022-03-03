"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PadsController_1 = __importDefault(require("./controllers/PadsController"));
var PadShimmerController_1 = __importDefault(require("./controllers/PadShimmerController"));
var MotionsPadController_1 = __importDefault(require("./controllers/MotionsPadController"));
var HilsongPadController_1 = __importDefault(require("./controllers/HilsongPadController"));
var AmbientPadController_1 = __importDefault(require("./controllers/AmbientPadController"));
var GuitarPadControllers_1 = __importDefault(require("./controllers/GuitarPadControllers"));
var AgudoPadController_1 = __importDefault(require("./controllers/AgudoPadController"));
var AmbrosePadController_1 = __importDefault(require("./controllers/AmbrosePadController"));
var BethelPadController_1 = __importDefault(require("./controllers/BethelPadController"));
var EnvolvingPadController_1 = __importDefault(require("./controllers/EnvolvingPadController"));
var HilsongPad2Controller_1 = __importDefault(require("./controllers/HilsongPad2Controller"));
var OrganChoirPadController_1 = __importDefault(require("./controllers/OrganChoirPadController"));
var WorshipSolutionPadController_1 = __importDefault(require("./controllers/WorshipSolutionPadController"));
var InforPadsController_1 = __importDefault(require("./controllers/InforPadsController"));
var routes = express_1.Router();
routes.get('/warm_pads', PadsController_1.default.index);
routes.get('/warm_pads/:id', PadsController_1.default.show);
routes.get('/pad_shimmer', PadShimmerController_1.default.index);
routes.get('/pad_shimmer/:id', PadShimmerController_1.default.show);
routes.get('/motions_pad', MotionsPadController_1.default.index);
routes.get('/motions_pad/:id', MotionsPadController_1.default.show);
routes.get('/hilsong_pad', HilsongPadController_1.default.index);
routes.get('/hilsong_pad/:id', HilsongPadController_1.default.show);
routes.get('/ambient_pad', AmbientPadController_1.default.index);
routes.get('/ambient_pad/:id', AmbientPadController_1.default.show);
routes.get('/guitar_pad', GuitarPadControllers_1.default.index);
routes.get('/guitar_pad/:id', GuitarPadControllers_1.default.show);
/** INFOR PADS */
routes.get('/infor_pads', InforPadsController_1.default.index);
/** NEXT UPDATEDING */
routes.get('/agudo_pad', AgudoPadController_1.default.index);
routes.get('/agudo_pad/:id', AgudoPadController_1.default.show);
//
routes.get('/ambrose_pad', AmbrosePadController_1.default.index);
routes.get('/ambrose_pad/:id', AmbrosePadController_1.default.show);
//
routes.get('/bethel_pad', BethelPadController_1.default.index);
routes.get('/bethel_pad/:id', BethelPadController_1.default.show);
//
routes.get('/envolving_pad', EnvolvingPadController_1.default.index);
routes.get('/envolving_pad/:id', EnvolvingPadController_1.default.show);
//
routes.get('/hilsong_pad_2', HilsongPad2Controller_1.default.index);
routes.get('/hilsong_pad_2/:id', HilsongPad2Controller_1.default.show);
//
routes.get('/organ_choir_pad', OrganChoirPadController_1.default.index);
routes.get('/organ_choir_pad/:id', OrganChoirPadController_1.default.show);
//
routes.get('/worship_solution_pad', WorshipSolutionPadController_1.default.index);
routes.get('/worship_solution_pad/:id', WorshipSolutionPadController_1.default.show);
exports.default = routes;
