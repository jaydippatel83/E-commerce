import React from 'react';

const ContactUs = () => {
    return (
        <div  style={{backgroundColor:'black',padding:'50px 0px'}}>
            <div className="container">
                <div className="row ">
                    <div className="col-12 ml-auto mr-auto ">
                      
                    </div>

                    <div className="card col-10 ml-auto mr-auto p-0">
                        <h1 className="card-header text-center">Contact us</h1>
                        <div className="card-body d-lg-flex">
                            <div className="col-lg-7 col-md-12 col-sm-12 col-12 mb-5">
                                <iframe className="iframe-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.119927000562!2d72.52143832708451!3d23.01139600990313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85d10985e8e9%3A0x414d09be4caf2ec9!2sTitanium%20City%20Center%20(A%20To%20H%20Block)!5e0!3m2!1sen!2sin!4v1580818600694!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ minHeight: '300px', border: 'none' }} ></iframe>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <form>
                                    <div className="form-row">
                                        <div className="col-12 mb-3">
                                            <label className="my-1 mr-2 font-weight-bold"  >Full Name</label>
                                            <input type="text" className="form-control  " placeholder="Full Name" required />
                                        </div>
                                       
                                        <div className="col-12 mb-3">
                                            <label className="my-1 mr-2 font-weight-bold"  >Phone</label>
                                            <input type="text" className="form-control  " placeholder="Phone" required />
                                        </div>
                                        <div className="col-12 mb-3">
                                            <label className="my-1 mr-2 font-weight-bold"  >Email</label>
                                            <input type="text" className="form-control  " placeholder="Email" required />
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label  className="font-weight-bold" >Message</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary font-weight-bold" type="submit">Send <i className="fas fa-paper-plane"></i> </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}
export default ContactUs;