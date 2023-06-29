import { BaseService, Context } from "dcmm";
import { ORDRModel } from "../generated/model/ORDRModel.js";
import { oORDRSql } from "../generated/sql/ORDRSql.js";

export class ORDRService extends BaseService<ORDRModel> {
    public async hello(ctx: Context): Promise<ORDRModel[]> {
        const data = await oORDRSql.findAll(ctx as any);
        return data;
    }
}

export const oORDRService = new ORDRService();

