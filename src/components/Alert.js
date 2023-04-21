import React from 'react'

const Alert = (props) => {
    return (
        <div>
            {props.alert &&<div className='mt-2'>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{ props.alert.msg }</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
    )
}

export default Alert
