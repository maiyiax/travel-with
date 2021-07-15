//signup and login forms here 
import React, {useState} from "react";
import {ADD_USER} from "../utils/mutations";
import { useMutation } from '@apollo/react-hooks';
import Auth from '../utils/auth';

const Signup = () => {
    //state here
    const [formState, setFormState] = useState(
        {
            username: "",
            email: "",
            password: "",
        }
    );
    
    const [addUser, { error }] = useMutation(ADD_USER);
    // console.log(addUser)

    //updating state based on input 
    const handleChange = event => {
        const {name, value} = event.target;
        console.log(value)

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //submit function form here 
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const {data} = await addUser({
                variables: { ...formState}
            });
            Auth.login(data.addUser.token);
        }catch(e){
            console.error(e);
        }

        setFormState({
            username: '',
            email: '',
            password: ''
        });
    };

    //return form here 
    return(
        <div className = "signupForm">
            <h4>Sign Up</h4>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputUsername1" className="form-label">User Name</label>
                            <input 
                                className="class-form control formInput"
                                placeholder="username"
                                name="username"
                                type="username"
                                id="username"
                                value={formState.username}
                                onChange={handleChange}
                            />
                    </div>
                    <div className ="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            className="class-form control formInput"
                            placeholder="password"
                            name="password"
                            type="password"
                            id="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className ="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input 
                            className="class-form control formInput"
                            placeholder="email"
                            name="email"
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className ="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone number</label>
                        <input 
                            className="class-form control formInput"
                            placeholder="phone number"
                            name="phone number"
                            type="phone number"
                            id="phone number"
                            value={formState.phoneNumber}
                            onChange={handleChange}
                        />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
};

export default Signup;
