const mongoose = require("mongoose");

require("dotenv").config();
mongoose.set("strictQuery", true);

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@memories.ix0t0ok.mongodb.net/`);
    console.log("Conectado ao Banco de Dados");
}

main().catch((error)=>console.log(error));
module.exports = main;