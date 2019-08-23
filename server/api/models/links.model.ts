import {Sequelize, Model, DataTypes, BuildOptions} from "sequelize";
import db from '../../config/mysql/database';

export class LinksModel extends Model {
    public id!: number;
    public fromId!: number;
    public toId!: number;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

LinksModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        fromId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        toId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
        tableName: "links",
        sequelize: db.sequelize
    }
);


//LinksModel.sync({force: true}).then(() => console.log("Link table created"));
