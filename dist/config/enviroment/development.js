"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Development specific configuration
// ==================================
class Development {
    constructor() {
        this.host = "LocalHost";
        this.port = 3306;
        this.dbName = "typescriptDB";
        this.userName = "root";
        this.password = "TEJu6J5C1N3sZNhi";
        this.dialect = "mysql";
        this.connectionString = `${this.dialect}://${this.userName}:${this.password}@${this.host}:${this.port}/${this.dbName}`;
    }
}
exports.Development = Development;
