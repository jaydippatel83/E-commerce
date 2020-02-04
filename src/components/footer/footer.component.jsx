import React from "react";
import {withRouter}  from 'react-router-dom';
 

const FooterPage = ({history} ) => {
    return (
        <div>
            <footer className="page-footer font-small blue-grey lighten-5 "> 
                <div style={{ backgroundColor: ' #21d192' }}>
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 font-weight-bold">Get connected with us on social networks!</h6>
                            </div>
                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                
                                <i className="fab fa-facebook-f text-white  mr-4"></i>
                                 
                                <a className="tw-ic">
                                    <i className="fab fa-twitter  text-white mr-4" />
                                </a>

                                <a className="gplus-ic">
                                    <i className="fab fa-google-plus-g  text-white mr-4" />
                                </a>

                                <a className="li-ic">
                                    <i className="fab fa-linkedin-in  text-white mr-4" />
                                </a>
                                <a className="ins-ic">
                                    <i className="fab fa-instagram  text-white" />
                                </a> 
                            </div>  
                        </div> 
                    </div>
                </div>

                <div className="container   text-md-left mt-5 ml-auto mr-auto">
                    <div className="row mt-3 dark-grey-text">
                        <div className="col-md-3 col-sm-6 col-12 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">CC-Fashion</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto " style={{ width: '60px',backgroundColor:' #21d192'  }} />
                            <p className="text-left">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                              consectetur
                             adipisicing elit.
                                </p> 
                        </div>
                        <div className="col-md-2 col-sm-6 col-12 col-lg-2 col-xl-2 mx-auto mb-4"> 
                            <h6 className="text-uppercase font-weight-bold">Collections</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' ,backgroundColor:' #21d192'  }} />
                            <p>
                                <a className="dark-grey-text" href="#!"   onClick={() => history.push('/shop/hats')}>hats</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!"   onClick={() => history.push('/shop/jackets')} >jackets</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!"  onClick={() => history.push('/shop/sneakers')}>sneakers</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!"  onClick={() => history.push('/shop/mens')}> mens</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!"  onClick={() => history.push('/shop/womens')}> womens</a>
                            </p>

                        </div> 

                        <div className="col-md-3 col-sm-6 col-12 col-lg-2 col-xl-2 mx-auto mb-4"> 
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px',backgroundColor:' #21d192'   }} />
                            <p>
                                <a className="dark-grey-text" href="#!">Your Account</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a className="dark-grey-text" href="#!">Help</a>
                            </p> 
                        </div> 
                        <div className="col-md-4 col-sm-6 col-12 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"> 
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' ,backgroundColor:' #21d192'  }} />
                            <p>
                                <i className="fas fa-home mr-3"></i>Ahmedabad, Titanium city center </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> cc-fashion@gmail.com</p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p>
                                <i className="fas fa-print mr-3"></i> + 01 234 567 89</p> 
                        </div> 
                    </div> 
                </div> 
                <div className="footer-copyright text-center text-black-50 py-3 bg-secondary text-dark font-weight-bold">© 2020 Copyright:
                    <a className="text-white" href="#"> CC-Fashion.com</a>
                </div> 
            </footer>
        </div>
    );
}

export default  withRouter(FooterPage);