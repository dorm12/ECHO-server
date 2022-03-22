// Generic Handler
import type { RequestHandler } from "express";
interface Handler {
    path: string;
    getHandler: RequestHandler;
}

export default Handler;