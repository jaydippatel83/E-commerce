import React from 'react'
import './login.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-buttons/custom-buttons.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
     
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try { 
            await auth.signInWithEmailAndPassword(email, password); 
            this.setState({ email: '', password: '' });
            toast.success("Successfully Logged In...!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            toast.error(" Something went wrong...!", {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error);
           
        }

    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="col-12 col-lg-6  ">
                <ToastContainer/>
                <div className="login">
                    <h2>I already have an Account</h2>
                    <span>Login with your Email And Password </span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type="email"
                            handleChange={this.handleChange}
                            value={this.state.email}
                            name="email"
                            label={this.state.email === '' ? 'Email' : ''}
                            required

                        />
                        <FormInput
                            type="password"
                            handleChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            label={this.state.password === '' ? 'Password' : ''}
                            required
                        />
                        <div className="buttons">
                            <CustomButton type="submit" >Sign In</CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
export default Login;