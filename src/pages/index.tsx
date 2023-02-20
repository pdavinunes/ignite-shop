import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Stripe from "stripe";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CaretLeft, CaretRight, Handbag } from "phosphor-react";

import {
  ArrowButton,
  FooterDetails,
  HomeContainer,
  Product,
} from "@/styles/pages/home";
import { stripe } from "@/lib/stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  const handleNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  const handlePrev = () => {
    if (instanceRef.current) {
      instanceRef.current?.prev();
    }
  };

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <ArrowButton direction={"left"} >
          <CaretLeft onClick={handlePrev} size={40} weight="bold" />
        </ArrowButton>
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                  <FooterDetails>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </FooterDetails>
                  <button>
                    <Handbag size={32} />
                  </button>
                </footer>
              </Product>
            </Link>
          );
        })}
        <ArrowButton direction={"right"}>
          <CaretRight onClick={handleNext} size={40} weight="bold" />
        </ArrowButton>
      </HomeContainer>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
