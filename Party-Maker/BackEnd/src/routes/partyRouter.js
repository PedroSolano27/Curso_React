// Roteador do Party
import { Router } from "express";
import partyController from "../controllers/partyController.js";

const partyRouter = Router();
partyRouter.route("/parties").post((req, res)=> partyController.create(req, res));             // Inserir Party
partyRouter.route("/parties").get((req, res)=> partyController.getAll(req, res));              // Resgata a lista de Parties
partyRouter.route("/parties/:id").get((req, res)=> partyController.get(req, res));             // Resgata uma Party por Id
partyRouter.route("/parties/:id").delete((req, res)=> partyController.delete(req, res));       // Deleta uma Party por Id
partyRouter.route("/parties/:id").put((req, res)=> partyController.update(req, res));          // Atualiza uma Party por Id

export default partyRouter;