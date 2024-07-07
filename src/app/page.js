import Slider from "../components/layouts/Slider";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Index from "../components/Home";
import Image from "next/image";

export default async function Home() {

  const products =await fetchProducts();
  console.log('products', products)
  return (
   <>
     <Index product={products}/>
   </>
  );
}

async function fetchProducts(){
  const productsResponse = await fetch(`https://randomuser.me/api/`);
  return productsResponse.json();

}
