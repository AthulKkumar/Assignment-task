import React from 'react'

const Userslist = (props) => {

    return (
        <div className='container col-md-4'>
            <div className=' my-2 ml-2'>

                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{props.userName}</h5>
                        <p className="card-text">{props.userEmail}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Userslist
