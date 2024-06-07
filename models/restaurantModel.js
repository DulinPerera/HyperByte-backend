import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    telephone: { type: String, required: true }
});

const model = mongoose.model('Restaurant', RestaurantSchema);

export default model