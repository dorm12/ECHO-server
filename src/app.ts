import * as express from "express";
import { echo_handlerer } from "./echo_handler/echo_handler"
import { dor_handlerer } from "./dor_handler/dor_handler"
const app = express()

app.get('/dor', dor_handlerer)
app.get("port", echo_handlerer)

export default app