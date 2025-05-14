// Aplicativo Principal do BackEnd
import express from "express";
import cors from "cors";
import connect from "./src/db/connection.js"; // Conexão com o Banco de Dados
import router from "./src/routes/mainRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

connect();   // Inicia a conexão com o DB
app.listen(3000, function(){
    console.log("BackEnd Online");
});