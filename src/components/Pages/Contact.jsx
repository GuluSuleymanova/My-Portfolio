import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        "service_sna2aki",
        'template_bb78et5', 
        form.current, 
       'rIgbOjL-y0rxOEu6Q'
       )
        .then((result) => {
            console.log(result.text);
            alert("Your message send:)");
        }, (error) => {
            console.log(error.text);

        });

        e.target.reset();
    };


    return (
        <div className='contact-page' id='contact'>
            <div className="container">
                <div className="head-part text-center">
                    <h1><span>Get </span>in Touch</h1>
                    <h3>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</h3>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-xs-6 col-12">
                        <div className="left-info">
                            <div className="phone">
                                <h3>Phone</h3>
                                <p><i className="fa-brands fa-whatsapp"></i> +994-055-813-41-86</p>
                            </div>
                            <div className="email">
                                <h3>Email</h3>
                                <p><i className="fa-regular fa-envelope"></i> gulusuleymanova19@gmail.com</p>
                            </div>
                            <div className="unvan">
                                <h3>Address</h3>
                                <p><i className="fa-solid fa-location-pin"></i> Azerbaijan,Baku</p>
                            </div>
                            <div className="social">
                                <h3>Social Profiles</h3>
                                <div className="social-icon">
                                    <a href="https://facebook.com/gulusuleymanova19" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                                    <a href="https://github.com/GuluSuleymanova" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                                    <a href="https://www.linkedin.com/in/GuluSuleymanova" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-7 col-sm-6 col-xs-6 col-12">
                        <div className="form-part">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="form-group col-xl-6">
                                        <i className="fa-regular fa-user"></i>
                                        <input type="text" name='user_name' id='text' className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className=" form-group col-xl-6">
                                        <i className="fa-regular fa-envelope"></i>
                                        <input type="email" name='user_email' id='ml' className="form-control" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group col-xl-12">
                                        <i className="fa-regular fa-message"></i>
                                        <textarea name="message"className="form-control" cols={10} rows={5} placeholder="Your Message" required />
                                    </div>
                                    <div className="submit-form">
                                        <button className="btn button-animated" type="submit" value="Send" name="send">
                                            <span><i className="fa-sharp fa-solid fa-paper-plane"></i> Send Message</span>
                                            </button>
                                            </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Contact