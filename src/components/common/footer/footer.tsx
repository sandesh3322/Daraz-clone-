import{  Footer } from "flowbite-react";
import logo from "../../../assets/images/Frame-10.jpg"
import { Heading1 } from "../title/title";

export const FooterComponent = () =>{
    return(<>
    <Footer container className="bg-slate-600 text-white rounded-none">
      <div className="w-full text-center bg-slate-600 text-white">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between bg-slate-600 text-white p-2">
         <div className="text-white flex items-baseline ">
         <Footer.Brand
            href="/"
            src={logo}
            alt="Flowbite Logo"
            name=""
           
            
          />
            {/* <div className="bg-white border-8 border-blue-700 rounded p-5"><Heading1><>MAGENTO COMMERCE</></Heading1></div> */}
         </div>
          <Footer.LinkGroup className="text-white">
            <Footer.Link href="/aboutus">About Us</Footer.Link>
            <Footer.Link href="/privacypolicy">Privacy Policy</Footer.Link>
            <Footer.Link href="/licensing">Licensing</Footer.Link>
            <Footer.Link href="/contacts">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Magento™" year={2022}  className="bg-slate-600 text-white"/>
      </div>
    </Footer>
    </>)
}