import Logo       from "./logo"
import Navigation from "./Navigation"
import SocialMedia from "./SocialMedia"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__content">

                <div className="footer__logo"><Logo colorText='white'/></div>
                <div className="footer__navigation">
                    <Navigation />
                </div>
                <div className="footer__social-media">
                    <SocialMedia />
                </div>
            </div>
        </footer>
    )
}