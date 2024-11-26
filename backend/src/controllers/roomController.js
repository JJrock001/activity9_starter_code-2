import Room from "../models/roomModel.js";

export const createRoom = async (req, res) => {
  try {
    const newRoom = new Room(req.body);
    await newRoom.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};

export const getRooms = async (req, res) => {
  const rooms = await Room.find();

  res.status(200).json(rooms);
};

export const deleteRoom = async (req, res) => {
  const { id } = req.params; // Get the item ID from the request parameters
  const index = rooms.findIndex(room => room._id === parseInt(id)); // Find the index of the item

  if (index !== -1) {
    rooms.splice(index, 1); // Remove the item from the array
    res.status(200).json({ message: "Item deleted successfully" }); // Success response
  } else {
    res.status(404).json({ error: "Item not found" }); // Error if the item is not found
  }
};
