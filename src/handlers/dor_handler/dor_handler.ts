// handler for dor
import { Request, Response } from "express";
import Handler from "../BaseHandler/BaseHandler";
export default class dor_handlerer2 implements Handler {
    path = "/dor";

    public getHandler(req: Request, res: Response): void {
        res.send("dor is the author\n");
    }
  }
