import { social, footerLinks } from "../index";
import FooterInput from "./FooterInput";

const Footer = () => {
  return (
    <footer className="bg-[#263238]">
      <div className="container">
        <div className="w-full max-w-full flex flex-col lg:flex-row justify-between flex-wrap max-lg:py-[50px] max-lg:px-[30px] lg:py-[65px] lg:px-[165px]">
          <div>
            <img
              src="src/assets/images/LogoLight.svg"
              alt="LogoLightIcon"
              className="w-[191px] h-[29px] object-contain"
            />
            <p className="text-[#F5F7FA] opacity-[0.9] text-[14px] max-w-[350px] leading-[20px] py-[40px]">
              Copyright © {new Date().getFullYear()} Nexcent ltd. <br/>
              All rights reserved
            </p>
            <div className="flex">
              {
                social.map((item)=>(
                  <div key={item.id} className="mr-[16px]">
                    <img
                      src={item.icon}
                      alt="logoIcons"
                      className="w-[32px] h-[32px] object-contain hover:bg-[#4CAF4F] transition-colors duration-200 rounded-full cursor-pointer"
                    />
                  </div>
                ))
              }
            </div>
          </div>

          <div className="text-white flex flex-col lg:flex-row justify-between flex-wrap max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-xl:mt-[20px]">
            {
              footerLinks.map((item)=>(
                <div key={item.id} className="mr-[32px]">
                  <h4 className="font-semibold text-[20px] leading-[28px] mb-[24px] max-lg:mt-3">
                    {
                      item.title
                    }
                  </h4>
                  {item.id === 3 ? (<FooterInput/> ) : ("")}
                  <ul>
                    {
                      item.links?.map((link)=>(
                          <li key={link.id} className={`opacity-[0.8] text-[14px] leading-[20px] ${link.id !== link.name.length-1 ? "mb-[12px]" : "mb-0"} hover:text-[#4CAF4F] transition-colors duration-200 cursor-pointer`}>
                          {
                            link.name
                          }
                          </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;