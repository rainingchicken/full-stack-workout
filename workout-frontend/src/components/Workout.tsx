import { useState } from "react";
import IWorkout from "../interfaces";
interface IParameter {
  workout: IWorkout;
}
const Workout = ({ workout }: IParameter) => {
  const [error, setError] = useState(null);

  const workoutTitle = workout.title;
  const workoutReps = workout.reps;
  const workoutLoad = workout.load;
  const workoutTimestamp = workout.createdAt;

  const handleDeleteClick = async () => {
    console.log("deleted");
    const response = await fetch(
      `http://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      setError(null);
    }

    location.reload(); //refresh page so see that deleted item is gone
  };

  return (
    <div>
      <h1>{workoutTitle}</h1>
      <p>Reps: {workoutReps}</p>
      <p>Load: {workoutLoad}</p>
      <p>{workoutTimestamp}</p>
      <button type="button" onClick={handleDeleteClick}>
        DELETE
      </button>
      {error}
    </div>
  );
};

export default Workout;
