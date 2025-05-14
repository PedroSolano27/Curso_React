// Conexão com o AtlasDB em https://cloud.mongodb.com
import mongoose from "mongoose";

async function connect(){
    try {
        await mongoose.connect("mongodb+srv://pedro:WoHQlSrPigVdMG5k@cluster0.risedws.mongodb.net/");
        console.log("Conectado ao AtlasDB");
    } catch (error) { console.log(error) }
}

export default connect;