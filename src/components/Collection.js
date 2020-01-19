import React from 'react'

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
}

export default Collection
