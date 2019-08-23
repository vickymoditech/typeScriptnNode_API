import * as express from 'express';
import {ThingsController} from '../controllers/things.controller';


export class ThingsRoutes {

    private thingsController: ThingsController = new ThingsController();

    public routerConfigure(app: express.Application) {
        app.route("/things").get(this.thingsController.index);
        app.route("/things").put(this.thingsController.create);
        app.route("/things/:id").get(this.thingsController.getThing);
        app.route("/things/:id").delete(this.thingsController.deleteThing);
        app.route("/things/:id").put(this.thingsController.updateThing);
        // add here more routes
    }

}
