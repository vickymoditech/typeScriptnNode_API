import * as express from 'express';
import {ThingsController} from '../controllers/things.controller';


export class ThingsRoutes {

    private thingsController: ThingsController = new ThingsController();
    private router: express.Router = express.Router();

    public registerRoutes(): express.Router {
        this.router.get('/', this.thingsController.index);
        this.router.put('/', this.thingsController.create);
        this.router.get('/:id', this.thingsController.getThing);
        this.router.delete('/:id', this.thingsController.deleteThing);
        this.router.put('/:id', this.thingsController.updateThing);
        // add here more routes
        return this.router;
    }
}
