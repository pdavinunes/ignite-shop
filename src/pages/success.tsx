import { stripe } from "@/lib/stripe";
import { SuccessContainer, ImageContainer, ImagesList } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Stripe from "stripe";
import Image from 'next/image'
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect } from "react";

interface SuccessProps {
  successPage: boolean;
  customerName: string;
  products: {
    quantity: number,
    items: {
      name: string;
      imageUrl: string;
    }[]
  }
}

export default function Success({ customerName, products }: SuccessProps) {
  
  const {clearCart} = useShoppingCart()
  
  useEffect(() => {
    clearCart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesList>
          {
            products.items.map(({imageUrl, name}, index) => {
              return (
                <ImageContainer key={index}>
                  <Image src={imageUrl}  width={120} height={110} alt={name} />
                </ImageContainer>
              )
            })
          }
        </ImagesList>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.quantity} 
          {products.quantity === 1 ? ' camiseta ' : ' camisetas '}
          já está a caminho da sua casa. 
        </p>

        <Link href="/">
          Voltar ao catalogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  const sessionId = String(query.session_id)


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  console.log(session.line_items?.data)

  const products = session.line_items?.data.reduce((acc, cur) => {
    const quantity = acc.quantity + (cur.quantity || 0)
    const currentProduct =  cur.price?.product as Stripe.Product;
    const item = {
      name: cur.description,
      imageUrl: currentProduct.images[0]
    }
    return {
      quantity,
      items: [...acc.items, item]
    };
  }, {
    quantity: 0,
    items: [] as any[]
  })
  
  return {
    props: {
      successPage: true,
      customerName,
      products: products
    }
  }
} 