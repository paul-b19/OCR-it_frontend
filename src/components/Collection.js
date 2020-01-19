import React from 'react'

const Collection = (props) => {

  const documents = props.allDocuments.map((document, index) =>
    <li key={index} id={document.id}>
      {document.title}
    </li>)
  
  return (
    <div className = "collection-container"> 
      <div>
        <h3>All Documents</h3>
      </div>
      <ul>
        {documents}
      </ul>
    </div>
  )
}

export default Collection