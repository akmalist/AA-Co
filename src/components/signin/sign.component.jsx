import React from 'react';

class SignIn extends React.Component {
            constructor() {
              super();

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event=> {
        event.preventDefault();
        this.setState({
            email:"",
            password: ""
        })
    }
    handleChange = event => {
        const {value, name}= event.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        
        return (
            <div className="sign-in">
              <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="email" name="email" required value={this.state.email}/>
                <label>Email</label>
                <input onChange={this.handleChange} type="password" name="password" required value={this.state.password}/>
                <label>Password</label>
                <button type ="submit" value="submit-form">LogIn</button>
                </form>
            </div>
        )
    }
}

export default SignIn;
