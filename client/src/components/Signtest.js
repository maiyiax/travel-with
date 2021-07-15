import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';

const Signtest = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    const [addUser] = useMutation(ADD_USER);

    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            });
            console.log(data);
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <div className="signupForm">
            <h4>Sign Up</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                    <input
                        className="class-form control formInput"
                        placeholder="username"
                        name="username"
                        type="username"
                        id="username"
                        value={userFormData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        className="class-form control formInput"
                        placeholder="password"
                        name="password"
                        type="password"
                        id="password"
                        value={userFormData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input
                        className="class-form control formInput"
                        placeholder="email"
                        name="email"
                        type="email"
                        id="email"
                        value={userFormData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Signtest;