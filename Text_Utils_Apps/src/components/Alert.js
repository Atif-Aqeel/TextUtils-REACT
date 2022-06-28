import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={ {height: '50px' }}>
            {props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {capitalize(props.alert.type)} </strong>: {props.alert.msg}

                {/* Button for cross at the end of barx */}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                {/* Four alers (alert,success,warning,danger) */}
            </div>
            }
        </div>
    )
}

export default Alert
