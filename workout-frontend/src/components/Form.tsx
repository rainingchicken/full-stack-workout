import { useState } from "react";

const Form = () => {
  const [workout, setWorkout] = useState({
    title: "",
    reps: 0,
    load: 0,
  });
  const [error, setError] = useState(null);
  const handleTitleChange = (e) => {
    setWorkout((state) => ({ ...state, title: e.target.value }));
  };
  const handleRepsChange = (e) => {
    setWorkout((state) => ({ ...state, reps: e.target.value }));
  };
  const handleLoadChange = (e) => {
    setWorkout((state) => ({ ...state, load: e.target.value }));
  };

  const handleSubmit = async (e) => {
    const newWorkout = {
      title: workout.title,
      load: workout.load,
      reps: workout.reps,
    };
    const response = await fetch(`http://localhost:4000/api/workouts`, {
      method: "POST",
      body: JSON.stringify(newWorkout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      setError(null);
      //   console.log("added!");
    }
  };

  return (
    <div>
      <h1>Add New Workout Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="workoutTitle">Workout Title</label>
        <input id="workoutTitle" type="text" onChange={handleTitleChange} />
        <label htmlFor="workoutReps">Reps</label>
        <input id="workoutReps" type="number" onChange={handleRepsChange} />
        <label htmlFor="workoutLoad">Load</label>
        <input id="workoutLoad" type="number" onChange={handleLoadChange} />
        <button type="submit">SUBMIT</button>
        {error}
      </form>
    </div>
  );
};

export default Form;
