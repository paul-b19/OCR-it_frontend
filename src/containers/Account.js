import React from 'react';
import NavBar from '../components/NavBar'
import Upload from '../components/Upload'
import Picture from '../components/Picture'
import Note from '../components/Note'
import Collection from '../components/Collection'
import Loading from '../components/Loading'


class Account extends React.Component {


        state = {
            user: 1,
            collectionAll: null,
            collectionUser: null,
            view: "upload", //"upload"/"new"/"edit"/"load"
            pic: null,
            picUrl: '',
            note: ""
        }



    componentDidMount() {
        console.log("mounted account container")

        fetch('http://localhost:3000/records')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                collectionAll: data,
                collectionUser: data.filter( user => user.user_id === this.state.user)
            })
        })
    }
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // state = {
  //   userId: 11,
  //   view: 'upload', //"upload"/"new"/"edit"/"load"
  //   pic: null,
  //   picUrl: '',
  //   allDocuments: []
  // }


    
    handleImageChange = (e) => {
        e.preventDefault();
        
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            this.setState({
                pic: file,
                picUrl: reader.result
            });
        }
        
        reader.readAsDataURL(file)
    }
    
    updateText = (text) => {
        this.setState({
            note: text
        })
    }
    
    uploadImg = (e) => {
        e.preventDefault();
        console.log("send POST request back end and update state.note from API")
        this.setState({
            view: 'new',
            note: "text from bakcend from API"
        })
        
    }

    updateNote = () => {
        console.log("send PATCH request to back end to update note ")
        this.setState({
            view: 'edit',
            note: "updated text edited by user"
        })
    }
    
    // *** no idea why i keep getting a type error
    // the parameter "notes" is appearing as null
    loadNotes = (notes) => { 
        // console.dir(notes)
        return notes.map( each => <Loading />)

        // return notes.map( each => <div> 
        //     {each.title} 
        //     <div/>
        // )	
    }



    render () {
      
        let view
        switch (this.state.view) {
            case "upload":
                view = <Upload 
                    pic= {this.state.pic} 
                    picUrl= {this.state.picUrl} 
                    handleImageChange = {this.handleImageChange} 
                    uploadImg = {this.uploadImg}
                    />
                break;
        
            case "new":
                view = <div>
                            <Picture 
                                picUrl= {this.state.picUrl} 
                            />
                            <Note 
                                note = {this.state.note}
                                updateText = {this.updateText}
                                updateNote = {this.updateNote}
                            />
                        </div>
                break;
        
            case "edit":
                view = <div>
                            <Upload 
                                pic= {this.state.pic} 
                                picUrl= {this.state.picUrl} 
                                handleImageChange = {this.handleImageChange} 
                                handleSubmit = {this.uploadImg}
                            />
                            <Note 
                                note = {this.state.note}
                                updateText = {this.updateText}
                                updateNote = {this.updateNote}
                            />
                        </div>
                break;
            case "load":
                view = <div>
                            <Loading />
                        </div>
                break;
        }

        return(
            <div>
                <NavBar />
                <Collection 
                    collection = {this.state.collectionUser}
                    loadNotes = {this.loadNotes}/>
                <div>{view}</div>
            </div>
        )
    }
    return(
      <div>
        <NavBar />
        <div className="wrapper">
          <div className="main">
            <div>{view}</div>
          </div>
          <div className="sidebar">
            <Collection allDocuments={this.state.allDocuments}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Account