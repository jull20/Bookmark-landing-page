import Logo from "./logo";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

export default function SideMenu({ref, isVisible, onClose}: {ref:React.RefObject<null>, isVisible: boolean, onClose:()=>void}){
    return(
        <section className={"sideMenu " + (isVisible ? 'sideMenu_visible' : '')} ref={ref}>
            <div className="sideMenu__header">
                <div className="sideMenu__logo"><Logo colorText='white' colorSign='white'/></div>
                <button className="sideMenu__close" onClick={onClose}><img src="icon-close.svg" alt="" /></button>
            </div>
            <div className="sideMenu__content">
                <div className="sideMenu__navigation">
                    <Navigation />
                    <button className="sideMenu__btn-login">Login</button>
                </div>
                <div className="sideMenu__social-media">
                    <SocialMedia />
                </div>
            </div>
        </section>
    )
}