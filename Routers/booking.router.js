import express from "express";

import {
  getRoomDetails,
  createRoom,
  getBookedRoomDetails,
  createNewBooking,
  getAllBookingData,
  getRepeatCustomerBookedRoomDetails,
} from "../Controllers/booking.controller.js";

const router = express.Router();

router.get("/room", getRoomDetails);
router.post("/rooms", createRoom);
router.get("/bookedRoom", getBookedRoomDetails);
router.post("/create", createNewBooking);
router.get("/allBooking", getAllBookingData);
router.get("/customer/:Customer_name", getRepeatCustomerBookedRoomDetails);

export default router;
