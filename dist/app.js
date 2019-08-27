"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const things_routes_1 = require("./api/routes/things.routes");
const links_routes_1 = require("./api/routes/links.routes");
class App {
    constructor() {
        this.thingsRoutes = new things_routes_1.ThingsRoutes();
        this.linksRoutes = new links_routes_1.LinksRoutes();
        this.app = express();
        this.Config();
        this.RoutesConfig();
    }
    Config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    RoutesConfig() {
        // Insert routes below
        this.app.use('/api/things', this.thingsRoutes.registerRoutes());
        this.app.use('/api/links', this.linksRoutes.registerRoutes());
        // All undefined asset or api routes should return a 404
        this.app.route('/:url(api|auth|components|app|bower_components|assets)/*')
            .get((req, res) => {
            res.status(404).json({ result: '404 not found' });
        });
        // All other routes should redirect to the app.html
        this.app.route('/*')
            .get((req, res) => {
            //res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
            res.status(200).json({ path: this.app.get('appPath') });
        });
    }
}
exports.default = new App().app;
