import { useNavigate } from "react-router-dom"

const WorkoutOverview = ({workoutTitle, exercises, _id, date}) => {
    const navigate = useNavigate()

    const dateObject = new Date(date)

    const exerciseNames = exercises.map(({exerciseName}, index) => {
        return (
            <li key={index}>
                {exerciseName}
            </li>
        )
    })

    return (
        <>
        <h3 onClick={() => navigate(`/repnotes/${_id}`) }> {workoutTitle} </h3>
        <h4> {dateObject.toDateString()} </h4>
        <ul>
            {exerciseNames}
        </ul>
        </>
    )
}

export default WorkoutOverview