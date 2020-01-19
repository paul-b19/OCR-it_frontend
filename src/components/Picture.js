import React from 'react'

const Picture = (props) => {

    return (
        <div>
            <p>User Uploaded Image</p>
            <img src= {props.picUrl} />
        </div>

    )
}

export default Picture 
