import React from 'react';
import SignIn from '../../components/signin/sign.component';
import SignUp from '../../components/sign-up.component/sign-up.component'
import './signin-signout.styles.scss'

export const SignInSignOut = ()=>(
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInSignOut;