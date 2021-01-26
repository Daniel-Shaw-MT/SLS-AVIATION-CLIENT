import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Cookie from "js-cookie";

class LoginForm extends Component {

    state = {
        userName: '',
        password: '',
        error: ''
    };
    handleUser = event => {
        this.setState({
            userName: event.target.value
        })
    }
    handlePass = event => {
        this.setState({
            password: event.target.value
        })
    }
    login = () => {
        (async () => {
            const rawResponse = await fetch('http://localhost:8000/flights/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: this.state.userName, password: this.state.password })
            });
            const content = await rawResponse.json();
            
                
                if(content.message === 'User not found'){
                    this.setState({ error: 'Username or password incorrect!'})
                    setTimeout(() => { this.setState({ error: ''})}, 2000)
                }else if(content.message === "Verify your email!"){
                    this.setState({error: 'Verify your Email address!'}) 
                    setTimeout(() => { this.setState({ error: ''})}, 2000)
                }else{
                    this.setState({ error: ''})
                //to set a cookie
                Cookie.set("token", content.token);
                }
                
                

            
            // to get a cookie
            //const token =  Cookie.get("token") ? Cookie.get("token") : null;
        })();
    }
    render() {
        return (
            <header>
                <div className='main-container'>
                    <div className='loginHead'>
                        
                        <h2>Hello and welcome to <i>SLS AVIATION</i> online flight logging system.</h2>
                        <br></br>
                        <p>Thank you for using our services, please input your details or register with us if you are new.</p>
                        <br></br>
                        <p>Any issues bugs or glitches must be reported through email to <em>mshaw@slsavia.com</em>.</p>
                    </div>
                    <br></br>
                    <div className='loginArea'>
                    <h1>Login</h1>
                        <input type="input" onChange={this.handleUser} className="form__field" placeholder="Username" name="name" id='userName' required />
                        <br></br>
                        <input type="password" onChange={this.handlePass} className="form__field" placeholder="Password" name="name" id='password' required />
                        <p className='error-text'>{ this.state.error}</p>
                        <div className='btn-cont'>
                        <Link to="/register">
                            <button className='btn'><span>Register</span></button>
                        </Link>
                        </div>
                        <div className='btn-cont'>
                            <button onClick={(e) => { this.login() }} className='btn-left'><span>Login</span></button>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default LoginForm
