/**
 * Sequelize initialization module
 */
import {Development} from '../enviroment/development';
import {Sequelize} from 'sequelize';

let development: Development = new Development();
let sequelize = new Sequelize(development.connectionString);

sequelize.authenticate().then(async () => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

let db = {
    Sequelize,
    sequelize: sequelize
};


export default db;
