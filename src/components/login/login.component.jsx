import React from 'react'
import './login.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-buttons/custom-buttons.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="login">
                <h2>I already have an Account</h2>
                <span>Login with your Email And Password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        name="email"
                        label="Email"
                        required
                    /> 
                    <FormInput
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        label="password"
                        required
                    /> 
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                </form>
            </div>
        );
    }
}
export default Login;