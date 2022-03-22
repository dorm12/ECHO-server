// handler for echoing

import { Request, Response } from "express";
import Handler from "../BaseHandler/BaseHandler";
export default class WhoamiHandler implements Handler {
    path = "/WhoAmI";
    
    public getHandler(req: Request, res: Response): void {
        res.send("ECHO server\n");
    }
  }
