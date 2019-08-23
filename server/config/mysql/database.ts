/**
 * Sequelize initialization module
 */
import {Development} from '../enviroment/development';
import {Sequelize} from 'sequelize';

let development: Development = new Development();


let db = {
    Sequelize,
    sequelize: new Sequelize(development.connectionString)
};

export default db;
