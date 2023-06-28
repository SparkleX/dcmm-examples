import { BaseService } from "dcmm";
import { ORDRModel } from "../generated/model/ORDRModel.js";

export class ORDRService extends BaseService<ORDRModel> {

    public async hello(): Promise<string> {
        return "hello from ORDR";
    }
}

export const oORDRService = new ORDRService();

