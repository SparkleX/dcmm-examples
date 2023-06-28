import { query } from "metal-dao";
//import { BaseRepo } from "../../core/svc/BaseRepo.js";
import { CARDModel } from "../model/CARDModel.js";

export class CARDSql {

	@query(`select * from CARD`)
    public async findXXXById(params: any[]):Promise<CARDModel[]> {
		throw -1;
	}
}

export const oCARDSql = new CARDSql();