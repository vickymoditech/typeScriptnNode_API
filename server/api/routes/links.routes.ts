import * as express from 'express';
import {LinksController} from '../controllers/links.controller';


export class LinksRoutes {

    private linksController: LinksController = new LinksController();
    private router: express.Router = express.Router();

    public registerRoutes(): express.Router {
        this.router.get('/', this.linksController.index);
        this.router.put('/', this.linksController.create);
        this.router.get('/:id', this.linksController.getLink);
        this.router.delete('/:id', this.linksController.deleteLink);
        this.router.put('/:id', this.linksController.updateLink);
        // add here more routes
        return this.router;
    }
}
