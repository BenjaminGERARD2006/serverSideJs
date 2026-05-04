import * as service from "../services/roomService.js";

export const createRoom = async (req, res) => {
  try {
    const room = await service.createRoom(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await service.getAllRooms();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRoomById = async (req, res) => {
  try {
    const room = await service.getRoomById(req.params.id);
    if (!room) return res.status(404).json({ message: "Not found" });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const room = await service.updateRoom(req.params.id, req.body);
    if (!room) return res.status(404).json({ message: "Not found" });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const room = await service.deleteRoom(req.params.id);
    if (!room) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};