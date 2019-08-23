# API_TypeScript
build Express-API in a typeScript with a Database(Mysql) and ORM(sequelize).


 - [Model association](#model-definition)
 - [Controller association](#Controller-definition)
 - [Routes association](#Routes-definition)
 - [Model validation](#Model-validation)
 
 
 
## Installation
*sequelize-typescript* requires [sequelize](https://github.com/sequelize/sequelize)

### Latest sequelize (v5)
```sh
npm install
```
```
npm run build 
```
```
npm run build-watch 
```
```
npm run start:dev 
```

## Model definition
```typescript
export class ThingsModel extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ThingsModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        tableName: "Thing",
        sequelize: db.sequelize // this bit is important
    }
);

//ThingsModel.sync({force: true}).then(() => console.log("Thing table created"));

ThingsModel.hasMany(LinksModel, {
    sourceKey: "id",
    foreignKey: "fromId",
    as: "previousLinks"
});

ThingsModel.hasMany(LinksModel, {
    sourceKey: "id",
    foreignKey: "toId",
    as: "nextLinks"
});
// Add more relationship here
```

## Controller definition
```typescript
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
    // add here more controller's methods
}
```

## Routes definition
```typescript
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
```
## Model validation
```typescript
export interface ThingsValidation{
    name: string;
}
```

