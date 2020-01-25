import React from 'react';
import NavBar from '../components/NavBar'
import Upload from '../components/Upload'
import Document from '../components/Document'
import Edit from '../components/Edit'
import Collection from '../components/Collection'
import Example from '../images/example.png'
import Loading from '../components/Loading'
import About from '../components/About'
import $ from 'jquery'



class Account extends React.Component {
  
  state = {
    userId: null,
    view: "upload/document", // "upload/edit"
    allDocuments: [],
    document: '',
    image: null,
    imageUrl: Example,
    language: 'ENG',
    searchValue: '',
    progressBar: false
  }

  baseUrl = 'http://localhost:3000/'
  
  componentDidMount() {
    this.fetchCollection()
  }

  fetchCollection = () => {
    fetch(`${this.baseUrl}users/${this.props.userId}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          userId: this.props.userId,
          allDocuments: data.records
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
    if (!this.state.image) {
      return null
    }

    $("#loading").modal('show')
    this.setState({
      progressBar: true
    })

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
        document: data,
        progressBar: false
      }, () => {$("#loading").modal('hide')})
      this.fetchCollection()
    })
    .catch(error => alert('Error', error))
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
        this.fetchCollection()
      })
      .catch(error => console.log('Error', error))
  }

  handleSearch = e => {
    this.setState({
      searchValue: e.target.value
    })
  }

  logOut = () => {
    this.setState({
      userId: null
    })
    this.props.logOut()
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
            <div className="edit col-xs-12 col-sm-6">
              <Edit document={this.state.document}
                    allDocuments={filteredDocs}
                    handleEdit={this.handleEdit}
                    handleEditSubmit={this.handleEditSubmit}
              />
            </div>
          </div> 
        break
    }

    return(
      <div>
        <Loading progressBar={this.state.progressBar}/>
        <About />
        <NavBar searchValue={this.state.searchValue}
                handleSearch={this.handleSearch}
                logOut = {this.logOut}
        />
        <div className="wrapper">
          <div className="main container-fluid">
            <div>{view}</div>
          </div>
          <div className="sidebar">
            <Collection allDocuments={filteredDocs}
                        handleCollection={this.handleCollection}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Account