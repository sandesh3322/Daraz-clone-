import { useParams, useSearchParams } from "react-router-dom"
import { useEffect } from "react";
export const CategoryPage = () =>{
   
   const params = useParams();
   const[ query, setQuery] = useSearchParams({});

   useEffect(()=>{

    // setTimeout(()=>{
    //     setQuery('page=1&title=test')
    // },5000)

   },[])


   
   console.log(query.get('page'))
   console.log(params)
   
   return(<>
    
    <p className="m-10 p-10">
        Category Detail of {params.slug}

    </p>
    
    
    </>)
}