import * as express from 'express';
import {LinksController} from '../controllers/links.controller';


export class LinksRoutes {

    private linksController: LinksController = new LinksController();

    public routerConfigure(app: express.Application) {
        app.route("/links").get(this.linksController.index);
        app.route("/links").put(this.linksController.create);
        app.route("/links/:id").get(this.linksController.getLink);
        app.route("/links/:id").delete(this.linksController.deleteLink);
        app.route("/links/:id").put(this.linksController.updateLink);
        // add here more routes
    }
}
