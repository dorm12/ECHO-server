// handler for echoing

import { Request, Response } from "express";
import Handler from "../BaseHandler/BaseHandler";
export default class echo_handler implements Handler {
    path = "/*";

    public getHandler(req: Request, res: Response): void {
        console.log(req.path);
        res.send(req.params[0] + "\n");
    }
  }
