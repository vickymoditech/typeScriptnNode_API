"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sequelize initialization module
 */
const development_1 = require("../enviroment/development");
const sequelize_1 = require("sequelize");
let development = new development_1.Development();
let sequelize = new sequelize_1.Sequelize(development.connectionString);
sequelize.authenticate().then(() => __awaiter(this, void 0, void 0, function* () {
    console.log('Connection has been established successfully.');
})).catch(err => {
    console.error('Unable to connect to the database:', err);
});
let db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize: sequelize
};
exports.default = db;
