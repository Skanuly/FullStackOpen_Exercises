const Person = (props) => {
    return (
        <ul>
            {props.persons.filter(element => 
                            element.name.toLowerCase().includes(props.filter.toLowerCase()))
                    .map(person =>
            <li key={person.name}>{person.name} {person.number} <button onClick={() => props.vanish(person.id, person.name)}>delete</button></li>)}
        </ul>
    )
}

export default Person