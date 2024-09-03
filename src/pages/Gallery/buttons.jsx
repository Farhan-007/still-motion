import React from 'react'

const Buttons = (props) => {

    const handleClick = (keyId) => {
        props.onChange(keyId)
    }

    return (
        <button
            onClick={() => handleClick(props.id)}
            className={`category-button ${props.active === props.id ? "active" : ""}`}
        >
            {props.id}
        </button>
        // <div class="gallery-buttons flex items-center justify-start md:justify-center py-4 px-4 overflow-x-scroll">
        // </div>
    )
}

export default Buttons
