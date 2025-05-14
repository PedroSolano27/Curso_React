// Modelo da Party
import mongoose, { Schema } from "mongoose";
import Service from "./Service.js";
const { serviceSchema } = Service;

const partySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    image: {            // Salvo em URL
        type: String,
        required: true,
    },
    services: {
        type: [serviceSchema],
    },
}, {timestamps: true});

const PartyModel = mongoose.model("Party", partySchema);
export default { PartyModel };