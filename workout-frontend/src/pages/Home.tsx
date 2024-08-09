import { useEffect, useState } from "react";
import Form from "../components/Form";
import Workout from "../components/Workout";
import IWorkout from "../interfaces";

const Home = () => {
  const [workouts, setWorkouts] = useState<null | Array<IWorkout>>(null);

  const fetchWorkouts = async () => {
    const url = `http://localhost:4000/api/workouts`;
    try {
      const response = await fetch(url);
      const workoutData = await response.json();
      if (response.ok) {
        setWorkouts(workoutData);
        // console.log(`data: `, workoutData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  //   return <div>{workouts ? console.log("ya") : console.log("no")}</div>;
  const loaded = () => {
    return (
      <>
        {workouts &&
          workouts.map((workout: IWorkout) => (
            <Workout key={workout._id} workout={workout} />
          ))}
      </>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <h1>Home</h1>
      <Form />
      <>{workouts ? loaded() : loading()}</>
    </div>
  );
};

export default Home;
