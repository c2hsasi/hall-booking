import express from "express";
import cors from "cors";
import hallRouter from "./Routers/booking.router.js";

const app = express();
const PORT = 6000;

app.use(cors());
app.use(express.json());
app.use("/api/hall", hallRouter);

app.listen(PORT, () => {
  console.log("Welcome to Hallbooking App:", PORT);
});
