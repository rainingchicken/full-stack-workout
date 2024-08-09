const Workout = ({ workout }) => {
  const workoutTitle = workout.title;
  const workoutReps = workout.reps;
  const workoutLoad = workout.load;
  const workoutTimestamp = workout.createdAt;
  return (
    <div>
      <h1>{workoutTitle}</h1>
      <p>Reps: {workoutReps}</p>
      <p>Load: {workoutLoad}</p>
      <p>{workoutTimestamp}</p>
      <button type="button"></button>
    </div>
  );
};

export default Workout;
