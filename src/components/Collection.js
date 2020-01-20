import React from 'react'

const Collection = (props) => {

  Array.prototype.unique = function() {
    return this.filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    })
  }

  const folderTitles = props.allDocuments.map(document =>
    document.group).unique()

  const folders = folderTitles.map((folder, index) => 
    <div key={index} className="panel-group" role="tablist">
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id={`collapseListGroupHeading${index}`}>
          <h4 className="panel-title">
            <a className="collapsed" data-toggle="collapse" href={`#collapseListGroup${index}`} aria-expanded="false" aria-controls={`collapseListGroup${index}`}>
              {folder}
            </a>
          </h4>
        </div>
        <div id={`collapseListGroup${index}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`collapseListGroupHeading${index}`}>
          <ul className="list-group">
            {props.allDocuments.map((document, ind) => {
              if (document.group === folder) {
                return <li key={ind} id={document.id}
                       onClick={() => props.handleCollection(document)} 
                       className="list-group-item">
                       {document.title}
                       </li>
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  )

  let output = folders.lenght === 0 ?
               <h4>No documents created yet</h4> :
               folders
  
  return (
    <div className = "collection-container"> 
      <div>
        <h3>All Documents</h3>
      </div>
      {output}
    </div>
  )
}

export default Collection