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
app.listen(process.env.PORT || 3333);
