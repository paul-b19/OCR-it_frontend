import React from 'react'

<<<<<<< HEAD
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
=======
class Collection extends React.Component {
  
  

    render () {
        console.log(this.props.collection)
        return(
            <div className = "collection-container"> 
                <div>User Notes Collection</div>
                {this.props.loadNotes(this.props.collection)}
                
    
            </div>
    
    
        )
    }
>>>>>>> carlos
}

export default Collection