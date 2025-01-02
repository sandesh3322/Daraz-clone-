// import React from "react"
import { BannerComponent } from "../../components/banner/banner";
import "./landing.css"
import { Heading1 } from "../../components/common/title/title";
import { ImageWithTitleCard, SinglePorductCard } from "../../components/common/card/single-card.component";

export const headerCss ={
    height:"100px",
    backgroundColor:"white"
}
const LandingPage  = () =>{
    // const [banner, setBanner] = useState([]);
    return(
        <>
        <BannerComponent/>
  <div className=" flex justify-between  mx-20 border-b-8 border-solid border-teal-300 ">
  <Heading1><>Category List </></Heading1>
    <a href="/categories" className="my-2 bg-teal-500 p-3 text-white rounded w-32 text-center hover:bg-black">
    View all &rarr;
    </a>
  </div>
  <div className="mx-20 my-2 grid-cols-4 grid max-sm:grid-cols-2 max-sm:mx-2 max-md:grid-cols-3 max-xl:grid-cols-4">
      <ImageWithTitleCard data= {{_id:"",title:"Gaming chairs", slug:"/category/gaming-chairs",image:"https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"}} />
      <ImageWithTitleCard data= {{_id:"",title:"Gaming chairs", slug:"/category/gaming-chairs",image:"https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"}} />
      <ImageWithTitleCard data= {{_id:"",title:"Gaming chairs", slug:"/category/gaming-chairs",image:"https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"}} />
      <ImageWithTitleCard data= {{_id:"",title:"Gaming chairs", slug:"/category/gaming-chairs",image:"https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"}} />
      <ImageWithTitleCard data= {{_id:"",title:"Gaming chairs", slug:"/category/gaming-chairs",image:"https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"}} />
      <ImageWithTitleCard data= {{_id:"",title:"Gaming chairs", slug:"/category/gaming-chairs",image:"https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"}} />
      
  </div>
  <div className=" flex justify-between  mx-20 border-b-8 border-solid border-teal-300 ">
  <Heading1><>Products List </></Heading1>
    <a href="/products" className="my-2 bg-teal-500 p-3 text-white rounded w-32 text-center hover:bg-black">
    View all &rarr;
    </a>
  </div>
  <div className=" grid grid-cols-4 products mx-20 m-3">
    <SinglePorductCard  data={{_id:"", price:"500", title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport", image:"https://flowbite-react.com/images/products/apple-watch.png"}}/>
    <SinglePorductCard  data={{_id:"", price:"500", title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport", image:"https://flowbite-react.com/images/products/apple-watch.png"}}/>
    <SinglePorductCard  data={{_id:"", price:"500", title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport", image:"https://flowbite-react.com/images/products/apple-watch.png"}}/>
    <SinglePorductCard  data={{_id:"", price:"500", title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport", image:"https://flowbite-react.com/images/products/apple-watch.png"}}/>
    <SinglePorductCard  data={{_id:"", price:"500", title:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport", image:"https://flowbite-react.com/images/products/apple-watch.png"}}/>
   
  </div>
      
    </>)
}
export default LandingPage;