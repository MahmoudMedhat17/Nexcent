import { useEffect, useRef, useState } from "react";
import {titles} from "../index";
import {FaBars, FaTimes, FaLongArrowAltRight} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const[open,setOpen] = useState(false);
    const headerRef = useRef();
    
    function handleOpen(){
        setOpen((prev)=>!prev);
    }                     
    
    function handleScroll(){
        if(window.scrollY > 100){
            headerRef.current.style.background = "#adacac87";
            headerRef.current.style.padding = "20px 0";
        }
        else{
            headerRef.current.style.background = "transparent";
            headerRef.current.style.padding = "40px 0"
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[])

  return (
    <header ref={headerRef} className="pt-[40px] fixed top-0 left-0 w-full transition-all duration-200 z-[999]">
        <div className="container">
            <div className="flex flex-row justify-between items-center w-full">
                <Link to="/">
                    <img
                        src="src/assets/images/Logo.svg"
                        alt="nexcentLogo"
                        className="w-[154px] h-[24px] object-contain"
                    />
                </Link>

                <ul className="flex max-lg:hidden">
                    {
                        titles.map((title)=>(
                            <li key={title.id} className="list-none mx-6">
                                <Link to={title.link} className="hover:text-[#4CAF4F] transition-colors duration-200">
                                    {title.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <button className="max-lg:hidden flex items-center bg-[#4CAF4F] text-white px-[20px] py-[10px] rounded-[6px] max-xl:text-[10px]">
                    Register Now <FaLongArrowAltRight className="ml-2"/>
                </button>

                <div>
                    <button onClick={handleOpen} className="lg:hidden">
                        {open ? <FaTimes className="w-[20px] h-[20px]"/> : <FaBars className="w-[20px] h-[20px]"/>}
                    </button>
                    {
                        open ? (
                            <ul className="flex flex-col absolute right-3 bg-[#adacac87] m-5 p-10 justify-center items-center rounded-[6px] lg:hidden">
                            {
                                titles.map((title)=>(
                                    <li key={title} className={`list-none mx-6 my-3`}>
                                        <Link to={title.link} className="hover:text-[#4CAF4F] transition-colors duration-200">
                                            {title.title}
                                        </Link>
                                    </li>
                                ))
                            }
                            <button className="flex items-center bg-[#4CAF4F] text-white px-[20px] py-[10px] rounded-[6px]">Register Now</button>
                            </ul>
                        )
                        :
                        (
                            ""
                        )
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;