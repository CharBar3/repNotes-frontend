import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import WorkoutOverview from "../components/WorkoutOverview"


const Dashboard = ({getUserWorkouts, userWorkouts}) => {

    let navigate = useNavigate()

    // useEffect(() => {
    //     getUserWorkouts()
    // }, []);


    const showWorkouts = userWorkouts.map(({workoutTitle, exercises, _id, date}, index) => {
        return (
                <WorkoutOverview
                workoutTitle={workoutTitle}
                exercises={exercises}
                date={date}
                _id={_id}
                key={index}
                />
        )
    })

    

    return (
        <>
        <h1> Your Workouts </h1>
        <h2> Planned Workouts </h2>
        {showWorkouts}
        <h2> Past Workouts </h2>
        </>
    )
}

export default Dashboard