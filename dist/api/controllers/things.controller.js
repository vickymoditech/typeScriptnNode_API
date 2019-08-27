"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const things_model_1 = require("../models/things.model");
class ThingsController {
    index(req, res, next) {
        try {
            things_model_1.ThingsModel.findAll({})
                .then((things) => res.status(200).json({ result: things }))
                .catch((error) => res.status(500).json(error));
        }
        catch (error) {
            next(error);
        }
    }
    create(req, res, next) {
        try {
            const params = req.body;
            things_model_1.ThingsModel.create(params).then((thing) => {
                res.status(200).json({ result: thing });
            }).catch((error) => {
                res.status(500).json(error);
            });
        }
        catch (error) {
            next(error);
        }
    }
    getThing(req, res, next) {
        try {
            const id = req.params.id;
            things_model_1.ThingsModel.findByPk(id).then((thing) => {
                if (thing)
                    res.status(200).json({ result: thing });
                else
                    res.status(404).json({ result: "Not found" });
            }).catch((error) => {
                res.status(500).json(error);
            });
        }
        catch (error) {
            next(error);
        }
    }
    deleteThing(req, res, next) {
        try {
            const id = req.params.id;
            const deleteOptions = {
                where: { id: id },
                limit: 1
            };
            things_model_1.ThingsModel.destroy(deleteOptions).then(() => {
                res.status(200).json({ result: "success" });
            }).catch((error) => {
                res.status(500).json(error);
            });
        }
        catch (error) {
            next(error);
        }
    }
    updateThing(req, res, next) {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const updateOptions = {
                where: { id: id },
                limit: 1
            };
            things_model_1.ThingsModel.update(updateData, updateOptions).then(() => {
                res.status(200).json({ result: "successfully updated" });
            }).catch((error) => {
                res.status(500).json(error);
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ThingsController = ThingsController;
