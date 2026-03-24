import { Router, type IRouter } from "express";
import healthRouter from "./health";
import subscribersRouter from "./subscribers";
import unsubscribeRouter from "./unsubscribe";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/subscribers", subscribersRouter);
router.use("/unsubscribe", unsubscribeRouter);

export default router;
