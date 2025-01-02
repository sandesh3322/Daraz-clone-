import axios ,{AxiosResponse} from "axios";

const axiosInstance = axios.create({
    // process.env.REACT_APP_API_URL
    baseURL: import.meta.env.VITE_API_URL,
    timeout:30000,
    // method:"GET,POST,PUT,PATch, delete"
    timeoutErrorMessage:"Server timed out...",
    // maxContentLength
    // maxRate
    // xsrfcookiename


    headers:{
        "Content-Type":"application/json"
    }
})

// interceptor 
axiosInstance.interceptors.response.use((response: any) =>{

    // console.log("sucessintercept :",response);
    return response.data;


},(error:any)=>{
    if(error.code==="ERR_BAD_REQUEST"){
        throw error.response
    }else{
        // to do : manipulation 

    }
})

export default axiosInstance;
