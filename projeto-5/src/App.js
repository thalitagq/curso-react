import  { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/context/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [cartIsShown, setCartIsShown] = useState (false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCarthandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCarthandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
