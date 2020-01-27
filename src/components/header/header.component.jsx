import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/lg.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-item/cart-item.component';
import CartDropDown from '../card-dropdown/card-dropdown.component';


const Header = ({ currentUser ,hidden}) => (
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
            <Link className="option" to="/contact">
                contact
            </Link>
            {
                currentUser ? (
                    <Link to="/" className="option" onClick={() => auth.signOut()}>
                        Sign out
                    </Link>
                ) : (
                        <Link className="option" to="/signin">
                            Sign In
                    </Link>
                    )
            }
            {/* <Link className="option"> */}
                <CartIcon /> 
            {/* </Link> */}

        </div>
       {hidden ? null :  <CartDropDown/>}
    </div>

);

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=> ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);