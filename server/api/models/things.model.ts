import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import db from '../../config/mysql/database';
import {LinksModel} from './links.model';

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

async function seedDatabaseIfNeeded(){
    await ThingsModel.sync({force: true});
    await LinksModel.sync({force: true});
}

async function manageRelationship(){

    // Add here more Relationship here.

    await ThingsModel.hasMany(LinksModel, {
        sourceKey: "id",
        foreignKey: "fromId",
        as: "previousLinks"
    });

    await ThingsModel.hasMany(LinksModel, {
        sourceKey: "id",
        foreignKey: "toId",
        as: "nextLinks"
    });

}

seedDatabaseIfNeeded();
manageRelationship();





