import React from 'react'

const Upload = (props) => {

  return (

    <div>
      <form onSubmit={props.handleUploadSubmit}>
        <label>
          Select image:
          <input type="file" name="inpFile" onChange={props.handleUpload}/>
        </label>
        <label>
          Select document language:
          <select value={props.language} onChange={props.handleLanguage}>
            <option value="ENG">English</option>
            <option value="SPA">Spanish</option>
            <option value="RUS">Russian</option>
            <option value="POR">Portuguese</option>
            <option value="BEL">Belarusian</option>
          </select>
        </label>
        <button type="submit" value="Submit">Upload Image</button>
      </form>
      <div className="imageContainer">
        <img className="img-fluid" src={props.imageUrl} alt="preview"/>
      </div>
    </div>
  )

}

export default Upload


{/* <div class="form-group">
<div class="input-group mb-3">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile02">
    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
  </div>
  <div class="input-group-append">
    <span class="input-group-text" id="">Upload</span>
  </div>
</div>
</div>

<div class="form-group">
  <label for="exampleSelect1">Example select</label>
  <select class="form-control" id="exampleSelect1">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div> */}