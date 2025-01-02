import { useForm } from "react-hook-form"
import { InputLabel, TextInputComponent } from "../../../components/common/form/input.component"
import { Heading2 } from "../../../components/common/title/title"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import authSvc from "../auth.service"
import { toast } from "react-toastify"
import { useContext, useEffect, useState } from "react"
import LoadingComponent from "../../../components/common/loading/loading.component"
import AuthContext from "../../../context/auth.context"
import { useDispatch, useSelector } from "react-redux"
import { setloggedInUserForRedux } from "../../../reducer/user.reducer"




const LoginPage = () =>{



    const loginDTO = Yup.object({
        email:Yup.string().email().required(),
        password: Yup.string().required()
    })




    let [loading, setLoading] = useState(false)
    const {handleSubmit, control , formState:{errors}} = useForm({
        resolver:yupResolver(loginDTO)
    })
    const  navigate=useNavigate()
    const dispatch = useDispatch()
    // const {loggedInUser, setLoggedInUser} = useContext(AuthContext)
    const loggedInUser = useSelector((root:any)=>{
        return root.auth.loggedInUser || null
    })
    useEffect(()=>{

        if(loggedInUser){
           
            toast.info("You are already logged in ")
            navigate('/'+loggedInUser.role)

        }
    },[loggedInUser])
    // const getLoggedInUser = async() =>{
    //     try{
    //         const response:any = await authSvc.getRequest("/auth/me",{auth:true})
    //         toast.info("you are already logged in ")
    //         navigate('/'+response.result.role)

    //     }catch(exception){
    //         console.log(exception)
    //     }
    // }

    // useEffect(()=>{

    //     const token = localStorage.getItem('_at') || null;
    //     if(token){
    //         //logged in user 
    //         getLoggedInUser()
    //     }

    // },[])
    




        const login =async (data:any) =>{
         try{
            setLoading(true)
            const response:any = await authSvc.postRequest('/auth/login',data);
            localStorage.setItem("_at", response.result.token.token)
            localStorage.setItem("_rt", response.result.token.refreshToken)
            console.log(response)
            toast.success(`Welcome to ${response.result.userDetail.role} panel`)
            dispatch(setloggedInUserForRedux(response.result.userDetail))
                navigate(`/${response.result.userDetail.role}`);
            

          }catch(exception:any){


            console.error(exception)
            toast.error(exception.data.message)
          
        
        
        }finally{
            setLoading(false)
         }
    }

    
  
    return(<>
    
    <section className="flex flex-col text-center items-center justify-center min-h-[70vh]">
        <Heading2 value="Login Page"/>
        <div className="border border-solid border-gray-50 p-5 min-w-[20%] bg-slate-100 rounded-md shadow-md">
        <form onSubmit={handleSubmit(login)} className="border-b border-spacing-6 border-gray-600">

        <div className="grid-cols-3 mt-3">
        <InputLabel htmlFor="email">Email:</InputLabel>
        <TextInputComponent
        name="email"
        type="email"
        control={control}
        errMsg={errors?.email?.message as string}/>
        </div>
        <div className="grid-cols-3 mt-3">
        <InputLabel htmlFor="password">Password:</InputLabel>
        <TextInputComponent
        name="password"
        type="password"
        control={control}
        errMsg={errors?.password?.message as string}/>
        </div>
        <div className="grid-cols-3 mt-3">
        <NavLink className="text-sm text-center hover:text-blue-300 text-gray-800" to={'/forget-password'}>Forget Password ?</NavLink>
        </div>
        <div className="flex justify-center  mt-3 pb-3">
            <Button disabled={loading} className=" w-[100%] bg-green-900 hover:text-black hover:bg-green-900 text-white"type="submit" color= {"teal"}>{loading?<LoadingComponent size="sm"/>:"Login"}</Button>
        </div>
        </form>
        <div className="grid">
        <NavLink to="/" className="bg-teal-900 text-white  px-1 p-2 rounded mt-3 mx-2 text-sm  w-[100%]">Login with Google</NavLink>
        <NavLink to="/" className="bg-teal-900  text-white px-1 p-2 rounded mt-3 mx-2 text-sm w-[100%]">Login with Facebook</NavLink>
        
        </div>
        </div>

    </section>
   
    </>)
}

export default LoginPage