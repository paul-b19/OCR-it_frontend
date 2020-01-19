import React, {Fragment} from 'react'

const Note = (props) => {

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
}

export default Note
