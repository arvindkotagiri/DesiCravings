import Image from "next/image";

const Contact3 = () => {
    return (
        <div>
<div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style1">
            <div className="container">
                <div className="row gy-4 align-items-stretch">
                    <div className="col-md-6 col-xl-3 h-100">
                        <div className="contact-box style1 h-100">
                            <div className="contact-icon"> <Image src="/assets/img/icon/location2.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Our Address</h3>
                            <p>604 Doug Russell Rd suite E</p>
                            <p style={{"visibility":"hidden"}}>Dummy</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 h-100">
                        <div className="contact-box style1 h-100">
                            <div className="contact-icon"><Image src="/assets/img/icon/gmail2.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Email</h3>
                            <p>info@exmple.com</p>
                            <p style={{"visibility":"hidden"}}>Dummy</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 h-100">
                        <div className="contact-box style1 h-100">
                            <div className="contact-icon"><Image src="/assets/img/icon/phone2.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Phone</h3>
                            <p>+1 (972) 957-4009</p>
                            <p style={{"visibility":"hidden"}}>Dummy</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 h-100">
                        <div className="contact-box style1 h-100">
                            <div className="contact-icon"><Image src="/assets/img/icon/clock2.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Operating Hours</h3>
                            <p>Sunday - Fri: 9 AM – 12 AM </p>
                            <p>Sat & Sun: 9 AM – 1 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-form-section section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
            <div className="container">
                <div className="row gx-60 gy-5">
                    <div className="col-xl-6">
                        <div className="contact-form-thumb">
                        <Image src="/assets/img/contact/contactThumb2_1.jpg" alt="img" width={933} height={634}  className="dca-contact-getintouch-img" />
                         
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-form style2">
                            <h2>Get in Touch</h2>
                            <form className="row" action="#">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-md-6">
                                    <input type="number" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-6">
                                    <select name="orderby" className="single-select" aria-label="Shop order">
                                        <option value="subject">Subject</option>
                                        <option value="complain">Complain</option>
                                        <option value="greetings">Greetings</option>
                                        <option value="date">Expire Date</option>
                                        <option value="price">About Price</option>
                                        <option value="order">About order</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea id="message" className="form-control" placeholder="Write your message here..."
                                        rows="5"></textarea>
                                </div>
                                <div className="col-12 form-group">
                                    <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                    <label htmlFor="reviewcheck">Collaboratively formulate principle capital. Progressively
                                        evolve user<span className="checkmark"></span></label>
                                </div>
                                <div className="col-12 form-group mb-0">
                                    {/* <button className="theme-btn w-100">SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button> */}
                                    <button className="btn btn-secondary w-100" disabled>SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="map-wrapper contact-area-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5384668537176!2d-97.11601162462267!3d32.724889786648696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d84e8e5d64d%3A0x3d95b3311785e13b!2sDesi%20Cravings!5e0!3m2!1sen!2sus!4v1750540031410!5m2!1sen!2sus"
            height="550" loading="lazy"
            ></iframe>
    </div>            
        </div>
    );
};

export default Contact3;