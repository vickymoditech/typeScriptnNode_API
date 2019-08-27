"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const things_controller_1 = require("../controllers/things.controller");
class ThingsRoutes {
    constructor() {
        this.thingsController = new things_controller_1.ThingsController();
        this.router = express.Router();
    }
    registerRoutes(app) {
        app.route("/things").get(this.thingsController.index);
        app.route("/things").put(this.thingsController.create);
        app.route("/things/:id").get(this.thingsController.getThing);
        app.route("/things/:id").delete(this.thingsController.deleteThing);
        app.route("/things/:id").put(this.thingsController.updateThing);
        // add here more routes
    }
}
exports.ThingsRoutes = ThingsRoutes;
