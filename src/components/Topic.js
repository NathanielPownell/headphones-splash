import React from 'react'
import './Topic.css'

const Topic = (props) => {

    const handleClick = async () =>{
        // props.setSelectedTopic(" ")
        props.setSelectedTopic(props.title)
        // const timer = setTimeout(() => {
        // })
    }

    return (
        <div className={`topic ${props.active}`} onClick={handleClick}>
            <div className='topicicon'>
                {props.icon}
            </div>
            <h1>
                {props.title}
            </h1>
            <p>
                {/* {props.desc} */}
            </p>
        </div>
    )
}

export default Topic