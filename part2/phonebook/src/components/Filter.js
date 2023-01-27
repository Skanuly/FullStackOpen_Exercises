const Filter = (props) => {
    return(
    <div>
        filter in name
        <input value={props.filter} onChange={props.handler}></input>
      </div>
    )
}

export default Filter