import { useState } from "react";
import Burger from "./components/Burger/Burger";
import Header from "./components/Header/Header";


function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  function burgerBtnHadler() {
    setBurgerOpen(!burgerOpen);
  }
  return (
    <>
      <Header />  
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
