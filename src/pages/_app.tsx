import { CartButton } from '@/components/CartButton'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { CartProvider } from 'use-shopping-cart'

import logoImg from '../assets/logo.svg'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (  
    <Container>
      <CartProvider
        shouldPersist={true}
        cartMode="checkout-session"
        stripe={process.env.STRIPE_PUBLIC_KEY || ''}
        currency="BRL"
      >
        <Header centerlized={pageProps.successPage}>
        <Image src={logoImg} alt=""/>
        {
          !pageProps.successPage &&
          <CartButton />
        }
        </Header>
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
