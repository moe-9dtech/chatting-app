import React, {Component} from 'react';
import './signUpStyle.css';
import {Router, useNavigation } from "react-router-dom";
function loginButton (props) {
let navigate = useNavigation();
return (
    <button
    onClick={
        props.state.userName === 'rocket' && props.state.password === "123" ? navigate("/profile"): <p>Invalid Credentials</p>
    }
    >Login</button>
)

}
class LoginCard extends Component { 
    state = {
        userName: '',
        password: ''
    }
    getUser = (event) => {
        this.setState({userName: event.target.value});
    }
    getPass = (event) => {
        this.setState({password: event.target.value});
    }
    // loginFunction = (event) => {
    //     event.preventDefault();
    //      const userName = this.state.userName;
    //      const password = this.state.password;
    //      this.setState({userName})
    //      if (userName === "rocket" && password === "123321"){
    //      } else {
    //         console.log("incorrect credentials!!");
    //      }
    // }
    render() { 
        return (
            <React.Fragment>
                <div className="container __cardContainer text-center">
                    <form className='login-form'>
                        <input 
                            className='name' 
                            type="text" 
                            placeholder='UserName' 
                            onChange={this.getUser}
                        />
                        <input 
                            className='pass' 
                            type="text" 
                            placeholder='Password' 
                            onChange={this.getPass}
                        />
                        {/* <button 
                            className="btn login-btn" 
                            onClick={ }
                        >Login
                        </button> */}
                        <loginButton />
                        <a href="#"><p>Forgot Password?</p></a>
                        <button className='btn google-btn'>
                            <span><i className="fa-brands fa-google"></i> </span>
                            Login With Google
                        </button>
                        <a href="#"><p>OR</p></a>
                        <button className='btn register-btn'>
                            <span><i className="fa-solid fa-right-to-bracket"></i> </span>
                            Register
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LoginCard;