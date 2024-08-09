const express = require("express");
const router = express.Router();
const Workout = require("../models/WorkoutModel");

//GET all workouts
router.get("/", async (req, res) => {
  //   res.json({ message: "GET all workouts" });
  const allWorkouts = await Workout.find({});
  res.status(200).json(allWorkouts);
});

//GET this workout
router.get("/:_id", async (req, res) => {
  //   res.json({ message: "GET this workout" });
  const _id = req.params;
  try {
    const thisWorkout = await Workout.findById(_id);
    res.status(200).json(thisWorkout);
  } catch (error) {
    res.status(404).json({ error: "Workout not found" });
  }
});

//POST new workout
router.post("/", async (req, res) => {
  //   res.json({ message: "POST new workout" });
  const { title, reps, load } = req.body;
  // console.log(req.body);
  try {
    const newWorkout = await Workout.create({ title, reps, load });
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//PATCH this workout
router.patch("/:_id", async (req, res) => {
  //   res.json({ message: "PATCH this workout" });
  const _id = req.params;
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(_id, req.body);
    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//DELETE this workout
router.delete("/:_id", async (req, res) => {
  //   res.json({ message: "DELETE this workout" });
  const _id = req.params;
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(_id);
    res.status(200).json(deletedWorkout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
