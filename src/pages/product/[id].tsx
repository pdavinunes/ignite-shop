import { stripe } from '@/lib/stripe';
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Stripe from 'stripe';
import { useShoppingCart } from 'use-shopping-cart';

interface ProductProps {
  product: {
    id: string;
    sku: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    priceFormated: string;
    currency: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {

  const { addItem } = useShoppingCart();

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      addItem(product)
      setIsCreatingCheckoutSession(false)
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    } 
  }

  const title = `${product.name} | Ignite Shop`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormated}</span>
          <p>{product.description}</p>
          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })
  
  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        sku: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: price.unit_amount,
        currency: 'BRL',
        priceFormated: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'prod_NIQP0Qu37Ucgsw' } },
    ],
    fallback: 'blocking',
  }
}

