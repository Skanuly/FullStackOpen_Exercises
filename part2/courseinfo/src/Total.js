const Total = (props) => {
    const sum = props.parts.map(part => {
        return(
            part.exercises
            )
        }
    ).reduce((accumulator, exercises) => { 
        return(
            accumulator += exercises
        )
    })

    return (
        <p><b>total of {sum} exercises</b></p>
    )
}

export default Total