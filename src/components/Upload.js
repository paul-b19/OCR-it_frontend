import React from 'react'

const Upload = (props) => {

  return (
    <div>
      <form onSubmit={props.handleUploadSubmit}>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input type="file" name="inpFile" onChange={props.handleUpload} className="custom-file-input"/>
            <label className="custom-file-label">Choose image</label>
          </div>
          <div className="input-group-append">
            <button type="submit" value="Submit" className="input-group-text">Submit</button>
          </div>
        </div>
        <div className="input-group mb-3 text-left">
          <label><h3>Document language:</h3></label>
          <select className="form-control" value={props.language} onChange={props.handleLanguage}>
            <option value="ENG">English</option>
            <option value="SPA">Spanish</option>
            <option value="RUS">Russian</option>
            <option value="POR">Portuguese</option>
            <option value="BEL">Belarusian</option>
          </select>
        </div>
      </form>
      <div className="imageContainer">
        <img className="img-preview" src={props.imageUrl} alt="preview"/>
      </div>
    </div>
  )
}

export default Upload