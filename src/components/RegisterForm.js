import people from '../assets/svg/030-people.svg'
import help from '../assets/svg/048-question.svg'

import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Cookie from "js-cookie";

class RegisterForm extends Component {

    state = {
        email: '',
        userName: '',
        password: '',
        error: ''
    };

    register = event => {
        (async () => {
            const rawResponse = await fetch('http://localhost:8000/flights/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: this.state.userName, email: this.state.email ,password: this.state.password })
            });
            const content = await rawResponse.json();
            console.log(content)
                this.setState({ error: content.message })
                if(content.message === 'Email already in use!'){
                    this.setState({ error: 'Email already in use!'})
                    setTimeout(() => { this.setState({ error: ''})}, 2000)
                }else if(content.message === "Username already exists!"){
                    this.setState({error: 'Username already exists!'}) 
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
    handleEmail = event => {
    // don't remember from where i copied this code, but this works.
    // eslint-disable-next-line
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( re.test(event.target.value) ) {
        // this is a valid email address
        this.setState({email: event.target.value})
        // or update the data in redux store.
    }
    else {
        // invalid email, maybe show an error to the user.
        console.log("BAD")
        this.setState({email: ''})
    }

    }

    render() {
        return (
            <header>
                <header>
                    <div className='main-container'>
                        <h1 className='title'>Login or Register</h1>
                        <ul>
                            <li>
                                <Link to="/contact">
                                    <button className='main-button'><img className='menu-icon' src={people} alt='people'></img></button>
                                </Link>
                                <Link to="/help">
                                    <button to="/help" className='main-button'><img className='menu-icon' src={help} alt='help'></img></button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
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
                        <h1>Register</h1>

                        {/* Create func/state for email handling */}
                        <input type="email" onChange={this.handleEmail} className="form__field" placeholder="Email" name="name" id='userName' required />
                        <br></br>
                        <input type="input" onChange={this.handleUser} className="form__field" placeholder="Username" name="name" id='userName' required />
                        <br></br>
                        <input type="password" onChange={this.handlePass} className="form__field" placeholder="Password" name="name" id='password' required />
                        <p className='error-text'>{this.state.error}</p>
                        <div className='btn-cont'>
                            <Link to='/'>
                                <button className='btn'><span>Go back</span></button>
                            </Link>
                        </div>
                        <div className='btn-cont'>
                            <button onClick={(e) => { this.register() }} className='btn-left'><span>Register</span></button>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default RegisterForm
