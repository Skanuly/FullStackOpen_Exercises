import Content from './Content'
import Header from './Header'

const Course = (props) => {

    /*const arr = props.course.map(course => {
        return(
        <>
            <Header   header={course.name} />
            <Content  parts={course.parts} />
        </>
        )
    })*/

    return(
        <>
            <Header   header={props.header} />
            <Content  parts={props.parts} />
        </>
    )
}

export default Course