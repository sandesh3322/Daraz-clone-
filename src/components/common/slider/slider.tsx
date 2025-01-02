import { Carousel } from "flowbite-react"
import { SingleSlider } from "./__contracts/contract.slider"

export const  SliderComponent = ({data}:{data:Array<SingleSlider>}) =>{
    return(<>
    
   
      <Carousel className="h-[75vh] max-sm:h-[35vh] max-md:h-[40vh] max-lg:h-[50vh] max-xl:h-[60vh]">
        {
          data && data.map((row:SingleSlider, i:number)=>(
            row.link ? <a key={i} href={row.link}><img className="" key={i}src={row.image} alt={row.title}/></a>:
            <img className="" key={i}src={row.image} alt={row.title}/>
            
          ))
        }
      </Carousel>
   
    
    </>)

}