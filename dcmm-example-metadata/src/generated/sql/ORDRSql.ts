import { query } from "metal-dao";
//import { BaseRepo } from "../../core/svc/BaseRepo.js";
import { ORDRModel } from "../model/ORDRModel.js";

export class ORDRSql {

	@query(`select * from OCRD`)
    public async aaa(params: any[]):Promise<ORDRModel[]> {
		throw -1;
	}
}

export const oORDRSql = new ORDRSql();