import { useEffect, useState } from "react";
import Burger from "./components/Burger/Burger";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SupportImages from "./components/SupportImages/SupportImages";
import Rules from "./components/Rules/Rules";
import Photos from "./components/Photos/Photos";
import Game from "./components/Game/Game";
import Faq from "./components/Faq/Faq";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  function burgerBtnHandler() {
    setBurgerOpen(!burgerOpen);
  }

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 250, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, [])
  return (
    <>
      <SupportImages />
      <Header />
      <main  data-aos="fade-in" className="main">
        <Home/>
        <Rules />
        <Photos />
        <Game />
        <Faq />
        <Form />
      </main>
      <Footer />
      <Burger burgerOpen={burgerOpen}/>
      <div onClick={burgerBtnHandler} className={burgerOpen ? 'burger-btn burger-btn_active' : 'burger-btn'}>
        <div className={burgerOpen ? 'burger-line burger-line_active' : 'burger-line'}>
        </div>
        <div className={burgerOpen ? 'burger-line burger-line_active' : 'burger-line'}>
        </div>
        <div className={burgerOpen ? 'burger-line burger-line_active' : 'burger-line'}>
        </div>
      </div>
    </>
  );
}

export default App;
