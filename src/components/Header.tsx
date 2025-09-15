import Button from "./Button"
import Logo from "./logo"
import Navigation from "./Navigation"
export default function Header({onOpen}: {onOpen:()=>void}){
    return(
        <header className="header">
            <div className="header__logo"><Logo /></div>
            <div className="header__sideMenu" onClick={onOpen}><img src="icon-hamburger.svg" alt="logo" /></div>
            <div className="header__navigation-wrapper">
                <Navigation />
                <Button type='orange'>login</Button>
            </div>
        </header>
    )
}