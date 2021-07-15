import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
    const [userFormData, setUserFormData] = useState({ username: '', password: ''});
    const [login, { error }] = useMutation(LOGIN);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const { data } = await login({
                variables: { ...userFormData }
            });

            Auth.login(data.login.token)

        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };

    return (
        <>
        <div className = "loginForm">
            <h4>Login</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Username</label>
                        <input
                            className="class-form control formInput"
                            placeholder="username"
                            name="username"
                            type="username"
                            id="username"
                            value={userFormData.username}
                            onChange={handleFormSubmit}
                            />
                </div>
                <div className="mb-3">
                    <label for="InputPassword"
                    className="form-label">Password</label>
                    <input
                        className="class-form control formInput"
                        placeholder="password"
                        name="password"
                        type="password"
                        id="password"
                        value={userFormData.password}
                        onChange={handleFormSubmit}
                    /> 
                </div>
            </form>
        </div>
        </>
    )
};

export default Login;