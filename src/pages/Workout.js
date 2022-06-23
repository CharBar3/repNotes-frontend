import { useState } from "react"
import { useParams } from "react-router-dom"

const Workout = ({getUserWorkouts, userWorkouts}) => {
    let params = useParams()
    
    const [workout, updateWorkout] = useState(userWorkouts.find((element) => element._id === params.id))
    console.log(workout)

    const handleChange = (e, index) => {
        e.preventDefault()
        // console.log(e.target.name)

        let exerciseToModify = workout.exercises
        // console.log(exerciseToModify)

        exerciseToModify[index].exerciseName = e.target.value
        console.log(exerciseToModify)

        console.log(workout.exercises[index])
        updateWorkout(prevState => {   
            return {
                ...prevState,
                    exercises: exerciseToModify
                }
            }
        )
    }

    const exercisesShow = workout.exercises.map(({exerciseName, exerciseNotes, sets}, index) => {

        // const setsShow = sets.map(({reps, setNotes, weight, _id}) => {
        //     console.log(reps+_id)
        //     return (
        //         <input type="text" name={reps+_id} />
        //     )
        // })

        return (
            <>
            <input type="text" name={`exercises[${index}].[${exerciseName}]`}  value={exerciseName} onChange={(e) => handleChange(e, index)}/>
            {/* index={index} name={exerciseName} */}
            </>
        )
    })

    return (
        <form>
            <input type="text" name="workoutTitle" value={workout.workoutTitle}/>
            <label>Exercises</label>
            <input type="text" value={workout.workoutTitle}/>
            {exercisesShow}
        </form>
    )
}

export default Workout