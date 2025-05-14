// Centralizador das rotas do Service e Party
import { Router } from "express";
import serviceRouter from "./serviceRouter.js";
import partyRouter from "./partyRouter.js";

const router = Router();
router.use("/", serviceRouter);
router.use("/", partyRouter);

export default router;