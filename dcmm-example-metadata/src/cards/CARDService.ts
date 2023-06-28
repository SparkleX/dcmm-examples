import { BaseService } from "dcmm";
import { CARDModel } from "../generated/model/CARDModel.js";

export class CARDService extends BaseService<CARDModel> {

    public async get(id: string): Promise<CARDModel> {
        const rt = await super.get(id);
        console.debug("todo");
        return rt;
    }
    public async hello(): Promise<string> {
        return "hello";
    }
}

export const oCARDService = new CARDService();

