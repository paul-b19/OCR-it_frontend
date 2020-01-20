import React from 'react'

const Edit = (props) => {

  Array.prototype.unique = function() {
    return this.filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    })
  }

  const folders = props.allDocuments.map(document =>
    document.group).unique()

  const formFolders = folders.map((folder, ind) => 
    <option key={ind} value={folder}>{folder}</option>)

  return(
    <form>
      <label>
        Select folder:
        <select value={props.document.group} name="group" onChange={e => props.handleEdit(e)}>
          {formFolders}
        </select>
      </label>
      <label>
        Or create new folder:
        <input type="text" value={props.document.group} name="group" onChange={e => props.handleEdit(e)} />
      </label>
      <label>
        Title:
        <input type="text" value={props.document.title} name="title" onChange={e => props.handleEdit(e)} />
      </label>
      <label>
        Content:
        <textarea value={props.document.body} name="body" onChange={e => props.handleEdit(e)} />
      </label>
      <button type="button" className="btn btn-primary" onClick={() => props.handleEditSubmit(props.document)}>Save Changes</button>
    </form>
  )
}

export default Edit