import * as express from 'express';
import {ThingsModel} from '../models/things.model';
import {ThingsValidation} from '../validations/things.validation';
import {UpdateOptions, DestroyOptions} from "sequelize";

export class ThingsController {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            ThingsModel.findAll<ThingsModel>({})
                .then((things: Array<ThingsModel>) => res.status(200).json({result: things}))
                .catch((error: Error) => res.status(500).json(error));
        } catch (error) {
            next(error);
        }
    }

    public create(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const params: ThingsValidation = req.body;
            ThingsModel.create<ThingsModel>(params).then((thing: ThingsModel) => {
                res.status(200).json({result: thing});
            }).catch((error: Error) => {
                res.status(500).json(error);
            })
        } catch (error) {
            next(error);
        }
    }

    public getThing(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: string = req.params.id;
            ThingsModel.findByPk<ThingsModel>(id).then((thing: ThingsModel | null) => {
                if(thing)
                    res.status(200).json({result: thing});
                else
                    res.status(404).json({result: "Not found"});
            }).catch((error: Error) => {
                res.status(500).json(error);
            });
        } catch (error) {
            next(error);
        }
    }

    public deleteThing(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: string = req.params.id;
            const deleteOptions: DestroyOptions = {
                where: {id: id},
                limit: 1
            };
            ThingsModel.destroy(deleteOptions).then(() => {
                res.status(200).json({result: "success"});
            }).catch((error: Error) => {
                res.status(500).json(error);
            });
        } catch (error) {
            next(error);
        }
    }


    public updateThing(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const id: string = req.params.id;
            const updateData: ThingsValidation = req.body;
            const updateOptions: UpdateOptions = {
                where: {id: id},
                limit: 1
            };
            ThingsModel.update(updateData, updateOptions).then(() => {
                res.status(200).json({result: "successfully updated"});
            }).catch((error: Error) => {
                res.status(500).json(error);
            });
        } catch (error) {
            next(error);
        }
    }

    // add here more controller's methods

}
