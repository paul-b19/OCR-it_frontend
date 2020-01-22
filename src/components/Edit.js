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
      <fieldset>
        <h3>Edit and Save Document</h3>
        <div className="form-group row text-left">
          <label className="col-sm-5 col-form-label">Select folder:</label>
          <div className="col-sm-7">
            <select className="form-control" value={props.document.group} name="group" onChange={e => props.handleEdit(e)}>
              {formFolders}
            </select>
          </div>
        </div>

        <div className="form-group row text-left">
          <label className="col-sm-5 col-form-label">Or create new folder:</label>
          <div className="col-sm-7">
            <input className="form-control" type="text" value={props.document.group} name="group" onChange={e => props.handleEdit(e)} />
          </div>
        </div>

        <div className="form-group row text-left">
          <label className="col-sm-5 col-form-label">Title:</label>
          <div className="col-sm-7">
            <input className="form-control" type="text" value={props.document.title} name="title" onChange={e => props.handleEdit(e)} />
          </div>
        </div>

        <div className="form-group text-left">
          <label>Content:</label>
          <textarea className="form-control" rows="15" value={props.document.body} name="body" onChange={e => props.handleEdit(e)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => props.handleEditSubmit(props.document)}>Save Changes</button>
      </fieldset>
    </form>
  )
}

export default Edit