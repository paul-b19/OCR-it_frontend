import React from 'react'

const Document = (props) => {

  let document
  if (props.document === '') {
    document = <h3>Select or Create a New Document</h3>
  } else {
    document =
      <div>
        <div>
          <h3>{props.document.title}</h3>
        </div>
        <div>
          <p className="text-justify">{props.document.body}</p>
        </div>
        <div>
          <button type="button" className="btn btn-primary" onClick={props.handleDocumentEdit}>Edit</button>
        </div>
      </div>  
  }

  return(
    <div>
      {document}
    </div>
  )
}

export default Document