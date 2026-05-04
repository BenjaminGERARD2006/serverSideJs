import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  number: { type: String, required: true },
  building: { type: String, required: true },
  capacity: { type: Number, required: true },
  type: { type: String, required: true }
});

export default mongoose.model("Room", roomSchema);