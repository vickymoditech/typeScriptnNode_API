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
const sequelize_1 = require("sequelize");
const database_1 = require("../../config/mysql/database");
const links_model_1 = require("./links.model");
class ThingsModel extends sequelize_1.Model {
}
exports.ThingsModel = ThingsModel;
ThingsModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: "Thing",
    sequelize: database_1.default.sequelize // this bit is important
});
function seedDatabaseIfNeeded() {
    return __awaiter(this, void 0, void 0, function* () {
        yield ThingsModel.sync({ force: true });
        yield links_model_1.LinksModel.sync({ force: true });
    });
}
function manageRelationship() {
    return __awaiter(this, void 0, void 0, function* () {
        // Add here more Relationship here.
        yield ThingsModel.hasMany(links_model_1.LinksModel, {
            sourceKey: "id",
            foreignKey: "fromId",
            as: "previousLinks"
        });
        yield ThingsModel.hasMany(links_model_1.LinksModel, {
            sourceKey: "id",
            foreignKey: "toId",
            as: "nextLinks"
        });
    });
}
seedDatabaseIfNeeded();
manageRelationship();
