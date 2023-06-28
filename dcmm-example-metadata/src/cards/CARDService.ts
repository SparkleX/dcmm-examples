import { BaseService } from "dcmm";

export class CARDService extends BaseService {

    public async get(id: string): Promise<any> {
        const rt = await super.get(id);
        console.debug("todo");
        return rt;
    }
}

export const oCARDService = new CARDService();

