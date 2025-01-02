import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import LoadingComponent from "../../../components/common/loading/loading.component";
import {toast} from "react-toastify";
import authSvc from "../auth.service";
import { useRef } from "react";
import { MessageConstants } from "../../../config/constants";
import { Button, Modal } from "flowbite-react";

const UserActivation=()=>{

    const params = useParams();
    const [loading, setLoading]= useState(true);
    const [msg , setMsg] = useState("")
    const hasActivatedRef = useRef(false);
    let navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [btnload , setBtnload] = useState(false)
    let [counter ,setCounter] = useState(10)
    const activateUser = async() => {
      try{
        console.log("activate user run ")
         await authSvc.getRequest('/auth/activate/'+params.token)
         setMsg("Your account has been sucessfully activated , Please login to continue ")
        


      }catch(exception:any){
        console.log('exception is caught ')
        if(exception.status === +422 && exception.data.message === MessageConstants.TOKEN_EXPIRED){
            // ask user to resend 
            setOpenModal(true)
            toast.error(exception.data.message)
        }
        else{

          toast.error(exception.data.message)
        }
      }
      finally{
        setLoading(false)
        setInterval(()=>{
          setCounter(counter--)
         },1000)
      }
    }
    const resendToken=async () =>{
      try{
        setBtnload(true)
        await authSvc.getRequest('/auth/resend-activationtoken/'+params.token)
        toast.success("A new token has been emailed ");        
        setMsg("A new token has been forwarded in your email")
      }catch(exception){
        toast.error('Error sending reset Token');
        console.log('exception')
      } finally{
        setOpenModal(false)
        setLoading(false)
        setInterval(()=>{
          setCounter(counter--)
         },1000)
      }
    }


    useEffect(()=>{
      if (!hasActivatedRef.current) { // Check if activation has already occurred
        hasActivatedRef.current = true; // Set to true to avoid re-activation
        activateUser(); // Call your function
    }

    },[])
  useEffect(()=>{
      if(counter == 0 ){
        navigate('/login')
      }
    },[counter])
    

    return(<>
    
    <section className="bg-white">
    <div className="grid pt-8 px-8 sm:px-12 lg:px-16 min-h-screen ">
  
      {
        loading?<div className="flex items-centre justify-center">
        
        <LoadingComponent/>
        
          </div>:<>

          <div className="flex items-center justify-center   text-xl text-cyan-900 pl-10">
            {msg}
          </div>

            <p className="mt-5 text-l font-bold text-center"> You will be redirectedd to login page after {counter} seconds</p>

        
        
        </>
      }



    </div>
        
    </section>
    <Modal show={openModal}  dismissible={false}>
        <Modal.Header theme={{close:{ base:"hidden",icon:"hidden"}}}>Token Expired</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Oops! It looks like your activation link has expired. For your security, activation links are only valid for a limited time. 
            But don’t worry—you can request a new one to complete your account setup.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => resendToken()} >{btnload?<LoadingComponent size="sm"/>:<>Resend Token</>}</Button>
         
        </Modal.Footer>
      </Modal>
    
    </>)
}

export default UserActivation