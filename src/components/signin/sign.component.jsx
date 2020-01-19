import React from 'react';
import './sign.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom.buttom.component';



class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: "", password: ""})
  }
  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }
  render() {

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
          takeChange={this.handleChange}
            type="email"
            name="email"
            label ="email"
            value={this.state.email}
            required/>
         
          <FormInput
          takeChange={this.handleChange}
            type="password"
            name="password"
            label ="password"
            value={this.state.password}
            required/>
          <CustomButton type="submit" >Log In</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
