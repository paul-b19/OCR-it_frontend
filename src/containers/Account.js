import React from 'react';
import NavBar from '../components/NavBar'
import Upload from '../components/Upload'
import Picture from '../components/Picture'
import Note from '../components/Note'
import Collection from '../components/Collection'


class Account extends React.Component {



    state = {
        // view: "upload" //"upload"/"new"/"edit"
    }

    componentDidMount() {
        console.log("mounted account container")

    }

    componentDidUpdate(prevProps, prevState){
        console.log("prevState:", prevState)
        console.log("state:", this.state)
    }



    render () {
      
        let view
        switch (this.state.view) {
            case "upload":
                view = <Upload />
                break;
        
            case "new":
                view = <div>
                            <Picture />
                            <Note />
                        </div>
                break;
        
            case "edit":
                view = <div>
                            <Upload />
                            <Note />
                        </div>
                break;
        }

        return(
            <div>
                <NavBar />
                {/* <Collection /> */}
                <div>{view}</div>
            </div>
        )
    }
}

export default Account