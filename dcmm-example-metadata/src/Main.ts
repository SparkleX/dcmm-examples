import { AppServer } from "dcmm"
import { oCARDService } from "./cards/CARDService.js"
import { oORDRService } from "./cards/ORDRService.js"

const oAppServer = new AppServer();
oAppServer.addService("CARD", oCARDService);
oAppServer.addService("ORDR", oORDRService);

oAppServer.start(3000);