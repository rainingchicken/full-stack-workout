require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const conn = require("./db/conn");
conn();

const userRoutes = require("./routes/userRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", userRoutes);
app.use("/api/workouts", workoutRoutes);

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
