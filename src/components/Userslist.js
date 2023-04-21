import React from 'react'

const Userslist = (props) => {

    return (
        <div className='container col-md-4'>
            <div className=' my-2 ml-2'>

                <div className="card border-secondary " >
                    <div className="card-body">
                        <h5 className="card-title">Name : {props.userName}</h5>
                        <p className="card-text">Email : {props.userEmail}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Userslist
