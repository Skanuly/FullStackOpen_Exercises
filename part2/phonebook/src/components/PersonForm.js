const PersonForm = (props) => {
    return(
        <>
            <div>
                name: <input value={props.name} onChange={props.handler} />
            </div>
            <div>
                number: <input value={props.number} onChange={props.handlernumber} />
            </div>
        </>  
    )
}

export default PersonForm