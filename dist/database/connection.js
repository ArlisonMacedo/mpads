"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var path_1 = __importDefault(require("path"));
var connection = knex_1.default({
    client: 'sqlite3',
    connection: {
        filename: 'src/database/database.sqlite'
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'database', 'migrations')
    },
    useNullAsDefault: true,
});
exports.default = connection;
