import React from 'react';
import './sign-in.styles.scss';
import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignIn = () => (
    <div className="sign-in">
        <Login />
        <SignUp/>
    </div>
);
export default SignIn;