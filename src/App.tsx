import './css/App.css'
import { useEffect, useRef, useState } from 'react'

import Header    from './components/Header'
import Hero      from './components/Hero'
import Features  from './components/Features'
import Extension from './components/Extension'
import Questions from './components/Questions'
import Feedback  from './components/Feedback'
import Footer    from './components/Footer'
import SideMenu  from './components/SideMenu'

import { CSSTransition} from 'react-transition-group';
import './css/tabsMenuswitchTransition.css'


function App() {
  const [isModal, setIsModal] = useState<boolean>(false);
  const nodeRef = useRef(null);
  useEffect(() => console.log(isModal), [isModal])
  return (
    <>
      <Header onOpen={()=>setIsModal(true)}/>
      <main className='main'>
        <Hero      />
        <Features  />
        <Extension />
        <Questions />
        <Feedback  />
      </main>
      <Footer />

      <CSSTransition
        in={isModal}
        key={'key'}
        nodeRef={nodeRef}
        timeout={300}
        classNames="modal"
      >
        <SideMenu ref={nodeRef} isVisible={isModal} onClose={()=>setIsModal(false)}/>
      </CSSTransition>
    </>
  )
}

export default App
