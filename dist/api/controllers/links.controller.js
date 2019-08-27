"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_model_1 = require("../models/links.model");
class LinksController {
    index(_req, res, next) {
        try {
            links_model_1.LinksModel.findAll({})
                .then((links) => res.status(200).json({ result: links }))
                .catch((err) => res.status(500).json(err));
        }
        catch (error) {
            next(error);
        }
    }
    create(req, res, next) {
        try {
            const params = req.body;
            links_model_1.LinksModel.create(params)
                .then((link) => res.status(200).json({ result: link }))
                .catch((err) => res.status(500).json(err));
        }
        catch (error) {
            next(error);
        }
    }
    getLink(req, res, next) {
        try {
            const linkId = req.params.id;
            links_model_1.LinksModel.findByPk(linkId)
                .then((link) => {
                if (link) {
                    res.status(200).json({ result: link });
                }
                else {
                    res.status(404).json({ errors: ["Link not found"] });
                }
            })
                .catch((err) => res.status(500).json(err));
        }
        catch (error) {
            next(error);
        }
    }
    updateLink(req, res, next) {
        try {
            const linkId = req.params.id;
            const params = req.body;
            const options = {
                where: { id: linkId },
                limit: 1
            };
            links_model_1.LinksModel.update(params, options)
                .then(() => res.status(200).json({ data: "success" }))
                .catch((err) => res.status(500).json(err));
        }
        catch (error) {
            next(error);
        }
    }
    deleteLink(req, res, next) {
        try {
            const linkId = req.params.id;
            const options = {
                where: { id: linkId },
                limit: 1
            };
            links_model_1.LinksModel.destroy(options)
                .then(() => res.status(200).json({ data: "success" }))
                .catch((err) => res.status(500).json(err));
        }
        catch (error) {
            next(error);
        }
    }
}
exports.LinksController = LinksController;
