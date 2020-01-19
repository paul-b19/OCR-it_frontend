import React from 'react';
import NavBar from '../components/NavBar'
import Upload from '../components/Upload'
import Picture from '../components/Picture'
import Note from '../components/Note'
import Collection from '../components/Collection'
import Loading from '../components/Loading'


class Account extends React.Component {

    constructor (props) {
        super ()
        this.state = {
            view: "upload", //"upload"/"new"/"edit"/"load"
            pic: null,
            picUrl: '',
            note: "Sample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample textSample text"
        }
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        console.log("mounted account container")

    }

    componentDidUpdate(prevProps, prevState){
        console.log("prevState:", prevState)
        console.log("state:", this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log("submit pic",this.props.pic, this.props.picUrl)
        this.setState({
            view: 'new'
        })
  
    }
    
    handleImageChange(e) {
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

    updateText



    render () {
      
        let view
        switch (this.state.view) {
            case "upload":
                view = <Upload 
                    pic= {this.state.pic} 
                    picUrl= {this.state.picUrl} 
                    handleImageChange = {this.handleImageChange} 
                    handleSubmit = {this.handleSubmit}
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
                            />
                        </div>
                break;
        
            case "edit":
                view = <div>
                            <Upload />
                            <Note />
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
                <Collection />
                <div>{view}</div>
            </div>
        )
    }
}

export default Account