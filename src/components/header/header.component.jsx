import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/lg.png';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';


const Header = ({ currentUser }) => (
    <div className="header">
        <div className="logo-option">
            <Link className="logo-container" to="/">
                <img src={logo} className="logo" />
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop">
                shop
            </Link>
            <Link className="option" to="/shop">
                contact
            </Link>
            {
                currentUser ?(
                    <Link className="option" onClick={() => auth.signOut()}>
                        Sign out
                    </Link>
                 ) :(
                    <Link className="option" to="/signin">
                        Sign In
                    </Link>
                 )
            }

        </div>
    </div>

);

const mapStateToProps= state=>({
    currentUser:state.user.currentUser
});
export default connect(mapStateToProps)(Header);