//signup and login forms here 
import {React,useState} from "react";
import {LOGIN, ADD_USER} from "../utils/mutations";
import useMutation from "@apollo/react-hooks";

export const Signup = () => {
    //state here
    const [formState, setFormState] = useState(
        {
            username: "",
            email: "",
            password: "",
            phoneNumber: "",
        }
    );

    //updating state based on input 
    const handleChange = event => {
        const {name, value} = event.target;
        console.log(value)

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const [addUser, { error }] = useMutation(ADD_USER);
    console.log(addUser)

    //submit function form here 
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const {data} = await addUser({
                variables: { ...formState}
            });
        }catch(e){
            console.error(e);
        }
    };

    //return form here 
    return(
        <div className = "signupForm">
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
                                value={setFormState.username}
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
                            value={setFormState.password}
                            onChange={handleChange}
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
                            value={setFormState.email}
                            onChange={handleChange}
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
                            value={setFormState.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
};


export const Login = () => {
    //state here
    const [formState, setFormState] = useState(
        {
            username: "",
            email: "",
            password: "",
        }
    );

    const [login, { error }] = useMutation(LOGIN);
    
    const handleChange = event => {
        const {name, value} = event.target;
        console.log(value)

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //submit form function here 
    const handleFormSubmit = async event => {
        event.preventDefault();

        try{
            const {data} = await login({
                variables: {...formState}
            });
            console.log(data);
        }catch(e){
            console.error(e);
        }
    };
    
    //return form here 
    return (
        <div className = "loginForm">
            <h4>Login</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            className="class-form control formInput"
                            placeholder="email"
                            name="email"
                            type="email"
                            id="email"
                            aria-describedby="emailHelp"
                            value={setFormState.email}
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
                        value={setFormState.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {error && <div>Sign Up Failed </div>}
        </div>
    );
};

