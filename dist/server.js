"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads/warm_pads', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'WARM_PADS')));
app.use('/uploads/pad_shimmer', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'PAD_SHIMMER')));
app.use('/uploads/motions_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'MOTIONS_PAD')));
app.use('/uploads/hilsong_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'HILSONG_PAD')));
app.use('/uploads/ambient_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'AMBIENT_PAD')));
app.use('/uploads/guitar_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'GUITAR_PAD')));
/** the next updateding */
app.use('/uploads/agudo_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'AGUDO_PAD')));
app.use('/uploads/ambrose_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'AMBROSE_PAD')));
app.use('/uploads/bethel_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'BETHEL_PAD')));
app.use('/uploads/envolving_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'ENVOLVING_PAD')));
app.use('/uploads/organ_choir_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'ORGAN_CHOIR_PAD')));
app.use('/uploads/hilsong_pad_2', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'HILSONG_PAD_2')));
app.use('/uploads/worship_solution_pad', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads', 'WORSHIP_SOLUTION_PAD')));
app.listen(3333, function () { return console.log('server is running'); });
