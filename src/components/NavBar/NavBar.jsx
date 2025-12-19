import { useState } from "react";
import Link from "../Lin/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Contact", path: "/contact" }
    ];
    const [open,setOpen]= useState(false);
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <IoMdClose className=" text-xl"></IoMdClose> :<RiMenu2Fill className=" text-xl" />  
                }
                
               
            </div>
           <ul className={ `${open? "top-16": "-top-60"} md:flex md:static duration-1000 absolute bg-yellow-200 px-6 `}>
            { 
           routes.map(route => <Link key={route.id} route={route}></Link>)
           }
           </ul>
        </nav>
    );
};

export default NavBar;