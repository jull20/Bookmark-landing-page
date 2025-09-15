import { useRef, useState } from "react"
import Button from "./Button"
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../css/tabsMenuswitchTransition.css'

export default function TabsMenu(){
    const [currIndex, setIndex] = useState<number>(0);
    const nodeRef = useRef(null);
    return(
        <div className="tabs-menu">
            <div className="tabs-menu__tabs">
                {
                    content.map((el, index) => {
                        return (
                            <button 
                                key={index}    
                                className={"tabs-menu__button " + (currIndex === index ? 'tabs-menu__button-curr' : '')}
                                onClick={() => setIndex(index)}
                                >
                                    {el.tabsName}
                            </button>
                        )
                    })
                }
            </div>
            <SwitchTransition mode="out-in">
                <CSSTransition  
                    key={content[currIndex].title+'_key'}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="post"
                >
                    <div className="tabs-menu-content" ref={nodeRef}>
                        <div 
                            className="tabs-menu__img" 
                            style={{backgroundImage: `url(${content[currIndex].img})`}}
                        />
                        <div className="tabs-menu__text-block">
                            <div className="tabs-menu__title">{content[currIndex].title}</div>
                            <div className="tabs-menu__description">{content[currIndex].description}</div>
                            <Button type='blue'>More Info</Button>
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

const content = [
    {
        tabsName: 'Simple Bookmarking',
        img: 'illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        tabsName: 'Speedy Searching',
        img: 'illustration-features-tab-2.svg',
        title: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        tabsName: 'Easy Sharing',
        img: 'illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
]