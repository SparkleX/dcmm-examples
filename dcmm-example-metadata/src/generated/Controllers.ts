import KoaRouter from "koa-router";
import { oCARDService } from "../cards/CARDService.js";
const oRouter = new KoaRouter();

oRouter.get("/data/:id", async (ctx) => {
    ctx.body = await oCARDService.get(ctx.params.id);
});
oRouter.post("/data", async (ctx) => {
    const uuid = await oCARDService.create(ctx.request.body);
    ctx.body = `"${uuid}"`;
});
oRouter.put("/data/:id", async (ctx) => {
    ctx.body = await oCARDService.update(ctx.params.id, ctx.request.body);
});
oRouter.delete("/data/:id", async (ctx) => {
    await oCARDService.delete(ctx.params.id);
    ctx.body = undefined;
    ctx.status = 204;
});

export  { oRouter };