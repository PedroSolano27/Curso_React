// Modelo do Serviço
import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {            // Salvo em URL
        type: String,
        required: true,
    },
}, {timestamps: true});

const ServiceModel = mongoose.model("Service", serviceSchema);
export default {ServiceModel, serviceSchema};