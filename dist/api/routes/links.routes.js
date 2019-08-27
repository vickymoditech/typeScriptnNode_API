"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_controller_1 = require("../controllers/links.controller");
class LinksRoutes {
    constructor() {
        this.linksController = new links_controller_1.LinksController();
    }
    registerRoutes(app) {
        app.route("/links").get(this.linksController.index);
        app.route("/links").put(this.linksController.create);
        app.route("/links/:id").get(this.linksController.getLink);
        app.route("/links/:id").delete(this.linksController.deleteLink);
        app.route("/links/:id").put(this.linksController.updateLink);
        // add here more routes
    }
}
exports.LinksRoutes = LinksRoutes;
