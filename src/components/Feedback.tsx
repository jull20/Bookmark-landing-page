import { useState } from "react";

export default function Feedback(){
    const [isErrorEmail, setErrorEmail] = useState<boolean>(false)
    const validate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.currentTarget.email.value);
        let email = event.currentTarget.email.value;
        const reg:RegExp = /.+@.+\..+/i;
        if(!reg.test(email)){
            setErrorEmail(true);
        }
    }
    return(
        <section className="feedback">
            <div className="feedback__content">
                <div className="feedback__text-block">
                    <h3 className="feedback__description">35,000+ ALREADY JOINED</h3>
                    <h2 className="feedback__title">Stay up-to-date with what we’re doing</h2>
                </div>
                <form className="feedback__form" onSubmit={validate}>
                    <div className="feedback__input-wrapper">
                        <input 
                            className={"feedback__input " + (isErrorEmail?'errorInput':'')} 
                            id="email" 
                            type="text" 
                            placeholder="Enter your email address"
                            onChange={() => setErrorEmail(false)}
                        />
                    </div>
                        <button className="feedback__contact-btn" type="submit">Contact Us</button>
                </form>
            </div>
        </section>
    )
}