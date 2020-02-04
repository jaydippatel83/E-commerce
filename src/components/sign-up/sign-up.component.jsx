import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttons/custom-buttons.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password != confirmPassword) {
            alert("passwords dont's match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="col-lg-6 col-md-6 col-12  margin-t">
                <div className="sign-up">
                    <h2 className="title">I do not have a Account</h2>
                    <span>Sign up with your Email And Password</span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <FormInput
                            type="text"
                            value={displayName}
                            name="displayName"
                            label="Display Name"
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="email"
                            value={email}
                            name="email"
                            label="Email"
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="password"
                            value={password}
                            name="password"
                            label="Password "
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="password"
                            value={confirmPassword}
                            name="confirmPassword"
                            label="Confirm password"
                            onChange={this.handleChange}
                            required
                        />
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </form>
                </div>
            </div>

        );
    }
}

export default SignUp;