import ConForm from "./ContactMe_form"

export default function ContactMe(){
    return(
        <div className="container contact-container" id="Contact">
            <div className="d-flex contact-div">
                <div className="experience-title">
                    Contact
                </div>
                <div className="contact-body d-flex">
                    <div className="contact-me d-flex">
                        <div className="form-title d-flex">
                            Send me a message!
                        </div>
                        <ConForm/>
                    </div>
                    <div className="contact-info d-flex">
                        <div className="contact-detail">
                            <img className="contact-img" src="/Image/instagram.png"/>
                            <div className="contact-name"> @richardtandean_</div>
                        </div>
                        <div className="contact-detail">
                            <img className="contact-img" src="/Image/linkedin.png"/>
                            <div className="contact-name"> Richard Tandean</div>
                        </div>
                        <div className="contact-detail">
                            <img className="contact-img" src="/Image/mail.png"/>
                            <div className="contact-name"> Richard123Tandean@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}