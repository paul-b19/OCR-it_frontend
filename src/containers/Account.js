import React from 'react';
import NavBar from '../components/NavBar'
import Upload from '../components/Upload'
import Document from '../components/Document'
import Edit from '../components/Edit'
import Collection from '../components/Collection'


class Account extends React.Component {
  
  state = {
    userId: 11,
    view: "upload/document", // "upload/edit"
    allDocuments: [],
    document: '',
    image: null,
    imageUrl: process.env.PUBLIC_URL + '/example.jpg',
    // imageUrl: null,
    language: 'ENG',
    searchValue: ''
  }

  baseUrl = 'http://localhost:3000/'
  
  componentDidMount() {
    fetch(`${this.baseUrl}users/${this.state.userId}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
            note: text
        })
      })
      .catch(error => console.log('Error', error))
  }

  handleUpload = e => {
    this.setState({
      image: e.target.files[0],
      imageUrl: URL.createObjectURL(e.target.files[0])
    })
  }

  handleLanguage = e => {
    this.setState({
      language: e.target.value
    })
  }

  handleUploadSubmit = e => {
    e.preventDefault()

    const data = new FormData()
    data.append('image', this.state.image)
    data.append('language', this.state.language)
    data.append('user_id', this.state.userId)

    fetch(`${this.baseUrl}records`, {
      method: 'POST',
      body: data
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        view: "upload/edit",
        document: data
      })
    })
    .catch(error => console.log('Error', error))
  }

  handleCollection = document => {
    this.setState({
      document
    })
  }

  handleDocumentEdit = () => {
    this.setState({
      view: "upload/edit"
    })
  }

  handleEdit = e => {
    let newDocument = this.state.document
    newDocument[e.target.name] = e.target.value
    this.setState({
      document: newDocument 
    })
  }
  
  handleEditSubmit = doc => {
    fetch(`${this.baseUrl}records/${doc.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(doc)
    })
      .then(resp => resp.json())
      .then(doc => {
        this.setState({
          document: doc,
          view: "upload/document"
        })
      })
      .catch(error => console.log('Error', error))
  }

  handleSearch = e => {
    this.setState({
      searchValue: e.target.value
    })
  }


  render () {

    let filteredDocs = [...this.state.allDocuments].filter(doc => 
      doc.title.toLowerCase().startsWith(this.state.searchValue.toLowerCase()))
    
    let view
    switch (this.state.view) {
      case "upload/document":
        view =
          <div className="row">
            <div className="upload col-xs-12 col-sm-6">
              <Upload imageUrl={this.state.imageUrl} 
                      handleUpload={this.handleUpload}
                      handleUploadSubmit={this.handleUploadSubmit}
                      language={this.state.language}
                      handleLanguage={this.handleLanguage}
              />
            </div>
            <div className="document col-xs-12 col-sm-6">
              <Document document={this.state.document}
                        handleDocumentEdit={this.handleDocumentEdit}
              />
            </div>
          </div> 
        break
      case "upload/edit":
        view = 
          <div className="row">
            <div className="upload col-xs-12 col-sm-6">
              <Upload imageUrl={this.state.imageUrl} 
                      handleUpload={this.handleUpload}
                      handleUploadSubmit={this.handleUploadSubmit}
                      language={this.state.language}
                      handleLanguage={this.handleLanguage}
              />
            </div>
            <div className="document col-xs-12 col-sm-6">
              <Edit document={this.state.document}
                    allDocuments={filteredDocs}
                    // allDocuments={this.state.allDocuments}
                    handleEdit={this.handleEdit}
                    handleEditSubmit={this.handleEditSubmit}
              />
            </div>
          </div> 
        break
    }

    return(
      <div>
        <NavBar searchValue={this.state.searchValue}
                handleSearch={this.handleSearch}
        />
        <div className="wrapper">
          <div className="main container-fluid">
            <div>{view}</div>
          </div>
          <div className="sidebar">
            <Collection allDocuments={filteredDocs}
            // <Collection allDocuments={this.state.allDocuments}
                        handleCollection={this.handleCollection}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Account