import Part from './Part'
import Total from './Total'

const Content = (props) => {
    const arr = props.parts.map(part => {
        return (
            <Part key={part.id} chave={part.id} name={part.name} exercises={part.exercises} />
        )
    })
    return (
        <div>
            {arr}
            <Total parts={props.parts} />
        </div>  
    )
}

export default Content