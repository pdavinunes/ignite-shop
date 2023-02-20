import Image from "next/image";
import { X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import {
  FooterBottom,
  FooterTop,
  ImageContainer,
  SidebarContainer,
  SidebarFooter,
  SidebarItem,
  SidebarItemDetails,
} from "./styles";
import axios from "axios";

interface ISidebarProps {
  handleClick(): void;
}

export function Sidebar({ handleClick }: ISidebarProps) {
  const {
    cartDetails,
    cartCount,
    removeItem,
    formattedTotalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function getStripeSession() {
    const productKeys = Object.keys(cartDetails || {});

    const formatedPrices = productKeys.map((productKey) => {
      const product = cartDetails![productKey];
      return {
        price: product.defaultPriceId,
        quantity: product.quantity,
      };
    });

    const response = await axios.post("/api/checkout", {
      prices: formatedPrices,
    });
    await redirectToCheckout(response.data.sessionId);
  }

  const productsList = Object.keys(cartDetails || {});

  return (
    <SidebarContainer>
      <button onClick={handleClick}>
        <X size={24} />
      </button>
      <h3>Sacola de compras</h3>
      {productsList.map((key) => {
        const object = cartDetails![key];
        return (
          <SidebarItem key={key}>
            <ImageContainer>
              <Image
                src={object.imageUrl || ""}
                width={100}
                height={100}
                alt=""
              />
            </ImageContainer>
            <SidebarItemDetails>
              <span>{object.name}</span>
              <strong>
                {object.formattedValue}{" "}
                {object.quantity > 1 && `(x${object.quantity})`}
              </strong>
              <button onClick={() => removeItem(key)}>Remover</button>
            </SidebarItemDetails>
          </SidebarItem>
        );
      })}
      <SidebarFooter>
        <FooterTop>
          <span>Quantidade</span>
          <strong>{cartCount} item</strong>
        </FooterTop>
        <FooterBottom>
          <span>Valor total</span>
          <strong>{formattedTotalPrice}</strong>
        </FooterBottom>
        <button disabled={!cartCount} onClick={getStripeSession}>
          Finalizar compra
        </button>
      </SidebarFooter>
    </SidebarContainer>
  );
}
