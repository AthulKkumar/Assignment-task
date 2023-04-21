import { useState } from "react"
import React from 'react'
import Userslist from "./Userslist"


const Registration = (props) => {

    const [userData, setUserData] = useState({ name: "", email: "", dob: "" })
    const [nameErr, setNameErr] = useState("") //For setting error in name feild
    const [emailErr, setEmailErr] = useState("") //For setting error in email feild
    const [dobErr, setDobErr] = useState("") //For setting error in dob feild

    let users = localStorage.getItem('users')
    const usersObj = JSON.parse(users)
    const birthDay = new Date(userData.dob).getFullYear()
    let today = Date.now()
    let age = Math.abs(birthDay - new Date(today).getFullYear())


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const validateUser = (users) => {

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var found = true;

        //To chaeck if the entered email is valid or not
        if (userData.email.match(validRegex)) {
            console.log("Vaild email");
        }
        else {
            console.log("Enter valid email");
            found = false
        }

        // To check if the current email is already existing in the local storage
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === userData.email) {
                found = false;
                setEmailErr("Email Alredy Exist")
                break;
            }
        }

        //To check if the user is less than 18
        if (age < 18) {
            found = false;
            setDobErr("You are less than 18")
        }
        // Checks the length of the name
        if (userData.name.length < 3 || userData.name.length > 20) {
            //If it not it will show error
            found = false;
            setNameErr("Please Enter characters between 3 and 20")
            setTimeout(() => {
                setNameErr("")
            }, 1200);
        }

        return found;

    }


    const validateForm = (e) => {

        let users = localStorage.getItem('users')
        //Checks wether user is present or not 
        if (users == null) {
            var userObj = []
        }
        else {
            userObj = JSON.parse(users)
        }

        setTimeout(() => {
            setDobErr("")
        }, 1200);

        setTimeout(() => {
            setEmailErr("")
        }, 1200);

        //If the user has the unique email then the data will add to local storage 
        if (validateUser(userObj)) {

            userObj.push(userData) //Pushing new user into the array 
            localStorage.setItem("users", JSON.stringify(userObj))
            props.showAlert("Added Successfully", "success")
            e.preventDefault()

        }
    }


    return (
        <div className="container">
            <div className='container w-50 mt-2 signup'>
                <h2 className="">Sign Up</h2>
                <hr></hr>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' onChange={handleChange} aria-describedby="emailHelp" minLength={3} maxLength={20} required />
                        <span className='text-danger'>{nameErr}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' onChange={handleChange} aria-describedby="emailHelp" required />
                        <span className='text-danger'>{emailErr}</span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type='phone' className="form-control" id="phone" minLength={10} maxLength={10} name='phone' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" name='dob' onChange={handleChange} aria-describedby="emailHelp" />
                        <span className="badge text-bg-secondary mt-2 mx-2">{!isNaN(age) ? age : 0}</span>
                        <span className='text-danger mx-2'>{dobErr}</span>
                    </div>

                    <button type="submit" onClick={validateForm} className="btn btn-success">Submit</button>
                </form>

            </div>
            <hr></hr>
            <h3>Users List</h3>
            <div className="row">

                {usersObj === null ? "No Users" : usersObj.map((user, index) => {
                    let userName = user.name;
                    let userEmail = user.email;
                    return <Userslist key={index} userName={userName} userEmail={userEmail} />
                })}

            </div>
        </div>


    )
}

export default Registration
