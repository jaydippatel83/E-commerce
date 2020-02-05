import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/lg.png';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-item/cart-item.component';
import CartDropDown from '../card-dropdown/card-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Headroom from 'react-headroom';

const Header = ({ currentUser, hidden }) => {

    return ( 
        <Headroom style={{ 
            transition: 'all .5s ease-in-out'
        }}>


            <nav className="navbar navbar-expand-lg navbar-light bg-white  header  ">

                <Link className=" navbar-brand logo-container" to="/">
                    <img src={logo} className="logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto   text-center">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/shop">
                                shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                currentUser ? (
                                    <Link to="/" className="nav-link" onClick={() => auth.signOut()}>
                                        Sign out
                                </Link>
                                ) : (
                                        <Link className="nav-link" to="/signin">
                                            Sign In
                                </Link>
                                    )
                            }
                        </li>
                        <li className="nav-item  ">
                            <Link className="nav-link" to="/contact">
                                contact
                        </Link>
                        </li>
                        <li className="nav-item active">
                            <CartIcon className="icon" />
                        </li>
                        <li className="nav-item">
                            {currentUser ? (
                                <div className="nav-link text-success font-weight-bold">
                                    {/* <div className="user-image"> */}
                                    {/* <img    src={currentUser.photoURL} /> */}
                                    {/* </div> */}
                                    <p className="user-name m-0">{currentUser.displayName}</p>
                                </div>

                            ) : ''

                            }
                        </li>
                    </ul>
                    {hidden ? null : <CartDropDown />}
                </div>
            </nav>
        </Headroom>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);