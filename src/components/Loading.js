import React, { Fragment } from 'react'

class Loading extends React.Component {

  state = {
    x: 0
  }

  componentDidMount() {
    

    //  this.interval = setInterval(() => {
    //   if (this.state.x < 100){
    //     this.setState({
    //       x: this.state.x + 10 
    //     })
    //     console.log("interval", this.state.x)
    //   } else {
    //     clearInterval(this.interval)
    //   }
    // },500)
  }

  // lifecycle method to compare previousProps & current Props?
  // so you can check this.props.x was true and is now false



  // handleLoading = () => {
  //   if (this.props.x) {
  //     let interval = setInterval(() => {
  //       if (this.state.x < 100 && this.props.x){
  //         this.setState({
  //           x: this.state.x + 10 
  //         })
  //         console.log("interval", this.state.x)
  //       } else {
  //         clearInterval(interval)
  //       }
  //     },500)
  //   }
  // }

  render() {

    let styleProgressBar = {
      width: `${this.state.x}%`
    }
    
    return(
      <Fragment>
        {/* <!-- Modal --> */}
        <div id="loading" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
              <div className="modal-body text-center">
                <h3>Image Being Processed...</h3>
                <div className="progress">
                  <div  
                    className="progress-bar progress-bar-striped progress-bar-animated" 
                    role="progressbar" 
                    aria-valuenow="75" 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    style={styleProgressBar}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Loading