// Rota do Service
import { Router } from "express";
import serviceController from "../controllers/serviceController.js";

const serviceRouter = Router();
serviceRouter.route("/services").post((req, res)=> serviceController.create(req, res));             // Inserir serviço
serviceRouter.route("/services").get((req, res)=> serviceController.getAll(req, res));              // Resgata a lista de Serviços
serviceRouter.route("/services/:id").get((req, res)=> serviceController.get(req, res));             // Resgata um Serviço por Id
serviceRouter.route("/services/:id").delete((req, res)=> serviceController.delete(req, res));       // Deleta um Serviço por Id
serviceRouter.route("/services/:id").put((req, res)=> serviceController.update(req, res));          // Atualiza um Serviço por Id

export default serviceRouter;