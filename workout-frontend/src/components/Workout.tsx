import { useState } from "react";
import IWorkout from "../interfaces";
import { useAuthContext } from "../hooks/useAuthContext";
interface IParameter {
  workout: IWorkout;
}
const Workout = ({ workout }: IParameter) => {
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthContext();

  const workoutTitle = workout.title;
  const workoutReps = workout.reps;
  const workoutLoad = workout.load;
  const workoutTimestamp = workout.createdAt;

  const handleDeleteClick = async () => {
    if (!user) {
      setError("You need to be logged in");
      return;
    }
    console.log("deleted");
    const response = await fetch(
      `https://localhost:4000/api/workouts/${workout._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
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
