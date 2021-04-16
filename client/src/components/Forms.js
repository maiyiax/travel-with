//signup and login forms here 
import React from "react";

export const Signup = () => {
    //state here

    //return form here 
    return(
        <div className = "signupForm">
        <h4>Sign Up</h4>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input 
                        className="class-form control formInput"
                        placeholder="name"
                        name="name"
                        type="name"
                        id="name"
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
                />
            </div>
            <div className ="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input 
                    className="class-form control formInput"
                    placeholder="email"
                    name="email"
                    type="email"
                    id="email"
                />
            </div>
            <div className ="mb-3">
                <label for="exampleInputPassword1" className="form-label">Phone number</label>
                <input 
                    className="class-form control formInput"
                    placeholder="phone number"
                    name="phone number"
                    type="phone number"
                    id="phone number"
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}


export const Login = () => {
    //state here

    //return form here 
    return (
        <div className = "loginForm">
            <h4>Login</h4>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            className="class-form control formInput"
                            placeholder="email"
                            name="email"
                            type="email"
                            id="email"
                            aria-describedby="emailHelp"
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
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

