import * as express from 'express';
import * as bodyParser from 'body-parser';
import {ThingsRoutes} from './api/routes/things.routes';
import {LinksRoutes} from './api/routes/links.routes';

class App {
    public app: express.Application;
    public thingsRoutes: ThingsRoutes = new ThingsRoutes();
    public linksRoutes: LinksRoutes = new LinksRoutes();

    constructor() {
        this.app = express();
        this.Config();
        this.RoutesConfig();
    }

    private Config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private RoutesConfig(): void {

        // Insert routes below
        this.app.use('/api/things', this.thingsRoutes.registerRoutes());
        this.app.use('/api/links', this.linksRoutes.registerRoutes());


        // All undefined asset or api routes should return a 404
        this.app.route('/:url(api|auth|components|app|bower_components|assets)/*')
            .get((req: express.Request, res: express.Response) => {
                res.status(404).json({result: '404 not found'});
            });

        // All other routes should redirect to the app.html
        this.app.route('/*')
            .get((req: express.Request, res: express.Response) => {
                // res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
                res.status(404).json({path: this.app.get('appPath')});
            });
    }
}

export default new App().app;
