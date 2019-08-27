"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const links_controller_1 = require("../controllers/links.controller");
class LinksRoutes {
    constructor() {
        this.linksController = new links_controller_1.LinksController();
        this.router = express.Router();
    }
    registerRoutes() {
        this.router.get('/links', this.linksController.index);
        this.router.put('/links', this.linksController.create);
        this.router.get('/links/:id', this.linksController.getLink);
        this.router.delete('/links:id', this.linksController.deleteLink);
        this.router.put('/links:id', this.linksController.updateLink);
        // add here more routes
        return this.router;
    }
}
exports.LinksRoutes = LinksRoutes;
