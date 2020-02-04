import React from 'react';
import './sign-in.styles.scss';
import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignIn = () => (
    <div className="container">
        <div className="row"> 
                <div className="col-12 sign-in">
                    <Login />
                    <SignUp />
                </div>
            </div>
         
    </div>
);
export default SignIn;