import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttons/custom-buttons.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { ToastContainer, toast } from 'react-toastify';
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
            toast.warn("Passwords dont's match...!", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            toast.success("Sign Up Successfully...!", {
                position: toast.POSITION.TOP_RIGHT
            });
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
           
        }
        catch (error) {
            toast.error("Something want wrong...!", {
                position: toast.POSITION.TOP_RIGHT
            });
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
            <div className="col-lg-6 col-md-12 col-12  margin-t">
                <div className="sign-up">
                    <h2 className="title">I do not have a Account</h2>
                    <span>Sign up with your Email And Password</span>
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                        <FormInput
                            type="text"
                            value={displayName}
                            name="displayName"
                            label={displayName===''? 'Display Name' : ' '}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="email"
                            value={email}
                            name="email"
                            label={email===''? 'Email' : ' '}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="password"
                            value={password}
                            name="password"
                            label={password===''? 'Password' : ' '}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            type="password"
                            value={confirmPassword}
                            name="confirmPassword"
                            label={confirmPassword===''? 'Confirm Password' : ' '}
                            onChange={this.handleChange}
                            required
                        />
                        <div className="text-center">
                        <CustomButton type="submit">Sign Up</CustomButton>
                           </div> 
                    </form>
                </div>
            </div>

        );
    }
}

export default SignUp;