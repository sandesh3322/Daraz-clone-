import { useEffect, useState } from "react"
import { SliderComponent } from "../common/slider/slider"
import { SingleSlider } from "../common/slider/__contracts/contract.slider"
import bannerSvc from "../../pages/banner/banner.service"
export const BannerComponent = () =>{
    const [bannerData , setBannerData] = useState([] as Array<SingleSlider>)

    const getAllBanner = async () => {
        //load api 
        try{
            const response :any= await bannerSvc.getRequest('/banner/list-home')
            console.log(response)
            setBannerData(response.result.data)

        }catch(exception){
            console.log(exception)
        }

    }

    useEffect(()=>{
            getAllBanner()
    },[])
    return(

        <>
        
        <SliderComponent data={bannerData}/>
    
        </>
    )
}