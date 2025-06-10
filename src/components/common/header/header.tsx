import { Avatar, Dropdown } from "flowbite-react";
import {  Navbar } from "flowbite-react";
import logo from "../../../assets/images/Frame-10.jpg"
import { NavLink } from "react-router-dom";
import { useContext} from "react";
import AuthContext from "../../../context/auth.context";
import { useSelector } from "react-redux";
export const HomeHeader = () =>{

//  let [loggedInUser , setLoggedInUser] = useState({} as any)

  //   const getLoggedInUser = async() =>{
//     try{
//         const response:any = await authSvc.getRequest("/auth/me",{auth:true})
//         setLoggedInUser(response.result)
//         console.log(loggedInUser)

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

//  const {loggedInUser} : any = useContext(AuthContext);
//  console.log(loggedInUser)

 //redux
 const loggedInUser = useSelector((root:any)=>{
  return root.auth.loggedInUser || null
})
//  console.log(loggedInUser)
    return(
        <>
             <Navbar fluid rounded className="bg-teal-100 shadow-xl">
        <Navbar.Brand >
          <NavLink to='/'><img src={logo} className="m-0 m:m-5 h-[50px] sm:h-[70px]" alt="Logo" /></NavLink>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
         <Navbar.Collapse>
         {
           loggedInUser?<>

           
           <div className="">
            
               
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <Avatar alt="User settings" img={loggedInUser.image} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{loggedInUser.name}</span>
              <span className="block truncate text-sm font-medium">{loggedInUser.email}</span>
            </Dropdown.Header>
            <NavLink  to={'/'+loggedInUser.role}><Dropdown.Item>Profile</Dropdown.Item></NavLink>
            <NavLink  to=""><Dropdown.Item>...</Dropdown.Item></NavLink>
            <Dropdown.Divider />
            <NavLink  to="/logout"><Dropdown.Item>Logout</Dropdown.Item></NavLink>
          </Dropdown>
            </div> 
           
           </>
           :
           <>
          
        <span className="p-2 bg-yellow-100 rounded"> 
          <NavLink 
          className={
            ({isActive}:{isActive:boolean}) =>
               isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3
              bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`}
           to="/register">Register</NavLink>
        </span>
        <span className="p-2 bg-yellow-100 rounded">
        <NavLink className={
          ({isActive}:{isActive:boolean}) => 
          isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3
            bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`}
           to="/login">Login</NavLink>
        </span>
          </>
         }
         </Navbar.Collapse>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <NavLink className={({isActive}:{isActive:boolean}) => isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3  bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`} to="/">Home</NavLink>
        <NavLink className={({isActive}:{isActive:boolean}) => isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3  bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`} to="/products">Products</NavLink>
        <NavLink className={({isActive}:{isActive:boolean}) => isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3  bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`} to="/categories">Categories</NavLink>
        <NavLink className={({isActive}:{isActive:boolean}) => isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3  bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`} to="/contacts">Contacts</NavLink>
        <NavLink className={({isActive}:{isActive:boolean}) => isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3  bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`} to="/aboutus">About Us</NavLink>
        <NavLink className={({isActive}:{isActive:boolean}) => isActive?'md:text-cyan-700':'md:text-black'+`block py-2 px-3  bg-cyan-700 rounded md:bg-transparent  md:p-0 dark: md:dark:text-cyan-500`} to="/chat">Chat</NavLink>
        
        </Navbar.Collapse>
      </Navbar>
        </>
    )
}