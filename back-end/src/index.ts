import express from "express";
import apis from "./apis/auth/api.ts";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import { db } from "./database/db.ts";

// const app = express();
const port = 3000;

// console.log('apis >>>>>0', apis.hello);
// const sayHelloTo = (name: string): string => `Hello Mvk ${name}!`;
// app.get("/", (req, res) => res.send(sayHelloTo("World")));


class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();        
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    }

}

export default new App().app;
