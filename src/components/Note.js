import React, {Fragment} from 'react'

const Note = (props) => {

<<<<<<< HEAD
  return(
    <Fragment>
      <br/>
      <br/>
      <form>
        <textarea  value={props.note} onChange= {this.props.updateText}/>
      </form>
        <button type ="submit">Submit</button>
    </Fragment>
  )
=======
    return(
        <Fragment>
            <br/>
            <div>Edit note</div>
            <br/>
            <textarea value={props.note} onChange={(e) => props.updateText(e.target.value)}/>
            <br />
            <br />
            <button onClick={props.updateNote}>Submit</button>
        </Fragment>
    )
>>>>>>> carlos
}

export default Note
