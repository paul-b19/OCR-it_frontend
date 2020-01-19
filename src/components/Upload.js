import React from 'react'

// const Upload = (props) => {

//     return(
//         <div>
//             test Upload


//         </div>

//     )
// }

// export default Upload

export default class Upload extends React.Component {
    
  
    
  
    render() {
      let {picUrl} = this.props;
      let $pic = null;
      if (picUrl) {
        $pic = (<img src={picUrl} />);
      }
  
      return (
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <input type="file" onChange={this.props.handleImageChange} />
            <button type="submit" onClick={this.props.handleSubmit}>Upload Image</button>
          </form>
          {$pic}
        </div>
      )
    }
  
  }