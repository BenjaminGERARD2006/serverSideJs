import Room from "../models/roomModel.js";

export const createRoom = (data) => Room.create(data);
export const getAllRooms = () => Room.find();
export const getRoomById = (id) => Room.findById(id);
export const updateRoom = (id, data) =>
  Room.findByIdAndUpdate(id, data, { new: true });
export const deleteRoom = (id) =>
  Room.findByIdAndDelete(id);