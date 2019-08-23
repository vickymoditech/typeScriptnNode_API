import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import db from '../../config/mysql/database';
import {LinksModel} from '../models/links.model';

export class ThingsModel extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ThingsModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: "Thing",
        sequelize: db.sequelize // this bit is important
    }
);

//ThingsModel.sync({force: true}).then(() => console.log("Thing table created"));

// Add more relationship here
ThingsModel.hasMany(LinksModel, {
    sourceKey: "id",
    foreignKey: "fromId",
    as: "previousLinks"
});

ThingsModel.hasMany(LinksModel, {
    sourceKey: "id",
    foreignKey: "toId",
    as: "nextLinks"
});
