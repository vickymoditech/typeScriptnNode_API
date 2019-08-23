import Sequelize from 'sequelize';

// Development specific configuration
// ==================================
export class Development {
    public host: String = "LocalHost";
    public port: number = 3306;
    public dbName: string = "typescriptDB";
    public userName: string = "root";
    public password: string = "TEJu6J5C1N3sZNhi";
    public dialect: string = "mysql";
    public connectionString: string = `${this.dialect}://${this.userName}:${this.password}@${this.host}:${this.port}/${this.dbName}`;
}
