import { AppServer } from "dcmm"
import { oCARDService } from "./cards/CARDService.js"
import { oRouter } from "./generated/Controllers.js";

const oAppServer = new AppServer();
oAppServer.initControllers(oRouter);
oAppServer.addService("oCARDService", oCARDService);
oAppServer.start(3000);