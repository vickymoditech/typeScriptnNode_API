import * as express from "express";
import {LinksModel} from "../models/links.model";
import {LinksValidation} from '../validations/links.validation';
import {UpdateOptions, DestroyOptions} from "sequelize";

export class LinksController {

    public index(_req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            LinksModel.findAll<LinksModel>({})
                .then((links: Array<LinksModel>) => res.status(200).json({result: links}))
                .catch((err: Error) => res.status(500).json(err));
        }
        catch (error) {
            next(error);
        }
    }

    public create(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const params: LinksValidation = req.body;

            LinksModel.create<LinksModel>(params)
                .then((link: LinksModel) => res.status(200).json({result: link}))
                .catch((err: Error) => res.status(500).json(err));
        } catch (error) {
            next(error);
        }
    }

    public getLink(req: express.Request, res: express.Response, next: express.NextFunction) {

        try {
            const linkId: string = req.params.id;

            LinksModel.findByPk<LinksModel>(linkId)
                .then((link: LinksModel | null) => {
                    if (link) {
                        res.status(200).json({result: link});
                    } else {
                        res.status(404).json({errors: ["Link not found"]});
                    }
                })
                .catch((err: Error) => res.status(500).json(err));
        } catch (error) {
            next(error);
        }
    }

    public updateLink(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const linkId: string = req.params.id;
            const params: LinksValidation = req.body;

            const options: UpdateOptions = {
                where: {id: linkId},
                limit: 1
            };

            LinksModel.update(params, options)
                .then(() => res.status(200).json({data: "success"}))
                .catch((err: Error) => res.status(500).json(err));
        } catch (error) {
            next(error);
        }
    }

    public deleteLink(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const linkId: string = req.params.id;
            const options: DestroyOptions = {
                where: {id: linkId},
                limit: 1
            };

            LinksModel.destroy(options)
                .then(() => res.status(200).json({data: "success"}))
                .catch((err: Error) => res.status(500).json(err));
        } catch (error) {
            next(error);
        }
    }
}
