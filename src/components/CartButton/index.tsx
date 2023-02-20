import { ButtonCart, CartButtonContainer, CounterItensCart } from "./styles";
import { Handbag } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Sidebar } from "../Sidebar";

export function CartButton() {
  const [showSidebar, setShowSidebar] = useState(false)
  const { cartCount } = useShoppingCart()
 

  function handleWithSidebarState() {
    setShowSidebar(!showSidebar)
  }
  return (
    <>
      <CartButtonContainer>
        <ButtonCart onClick={handleWithSidebarState}>
          <Handbag size={24} />
          { (cartCount && cartCount > 0) ? <CounterItensCart>{cartCount}</CounterItensCart> : <></> }
        </ButtonCart>
      </CartButtonContainer>
      {showSidebar && <Sidebar handleClick={handleWithSidebarState} />}
    </>
  );
}
