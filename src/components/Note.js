import React, {Fragment} from 'react'

const Note = (props) => {

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
}

export default Note
