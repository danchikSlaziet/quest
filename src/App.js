import { useState } from "react";
import Burger from "./components/Burger/Burger";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SupportImages from "./components/SupportImages/SupportImages";
import Rules from "./components/Rules/Rules";
import Photos from "./components/Photos/Photos";
import Game from "./components/Game/Game";
import Faq from "./components/Faq/Faq";
import Form from "./components/Form/Form";


function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  function burgerBtnHadler() {
    setBurgerOpen(!burgerOpen);
  }
  return (
    <>
      <SupportImages />
      <Header />
      <main className="main">
        <Home />
        <Rules />
        <Photos />
        <Game />
        <Faq />
        <Form />
      </main>
      <Burger burgerOpen={burgerOpen}/>
      <div onClick={burgerBtnHadler} className={burgerOpen ? 'burger-btn burger-btn_active' : 'burger-btn'}>
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
