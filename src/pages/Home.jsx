import { Hero } from "../Components/Hero";
import { Categories } from "../Components/Categories";
import { ProductCard } from "../Components/ProductCard";
import { Offers } from "../Components/Offers";
import { Testimonials } from "../Components/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <br />
      <Categories />
      <br />
      <ProductCard />
      <br />
  
    </>
  );
}