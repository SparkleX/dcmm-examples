import { BaseService, Context } from "dcmm";
import { CARDModel } from "../generated/model/CARDModel.js";
import { oCARDSql } from "../generated/sql/CARDSql.js";

export class CARDService extends BaseService<CARDModel> {

    public async get(ctx: Context): Promise<CARDModel> {
        return super.get(ctx);
    }
    public async find(ctx: Context): Promise<CARDModel[]> {
        const rt = await oCARDSql.findXXXById(ctx, [ctx.httpParams.id]);
        //const rt = await super.get(ctx);
        //console.debug("todo");
        return rt;
    }
    public async hello(): Promise<string> {
        return "hello";
    }
}

export const oCARDService = new CARDService(oCARDSql);

