import { customersLogo } from "../index";
import {FaLongArrowAltRight} from "react-icons/fa";


const Customers = () => {
  return (
    <section className="pt-[130px] bg-[#F5F7FA]">
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <img
                  src="src/assets/images/image9.svg"
                  alt="teslaLogo"
                  className="w-[326px] h-[326px]"
                />

                <div className="flex flex-col max-w-full">
                  <p className="text-[16px] leading-[24px] text-[#717171] w-[600px] max-w-full">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                  </p>
                  <h4 className="text-[#4CAF4F] text-[20px] leading-[28px] font-semibold mt-[16px]">
                    Tim Smith
                  </h4>
                  <p className="text-[#89939E] text-[16px] leading-[24px] mt-[8px]">
                    British Dragon Boat Racing Association
                  </p>

                  <ul className="flex mt-[32px] items-center max-w-full max-lg:grid max-lg:grid-cols-2 max-lg:place-items-center">
                    {
                      customersLogo.map((item)=>(
                        <li key={item.id} className="mr-[20px] lg:mr-[41px] max-lg:mb-4">
                          <img
                            src={item.icon}
                            alt="customerLogo"
                          />
                        </li>
                      ))
                    }
                    <button className="flex items-center text-[10px] text-[#4CAF4F] lg:text-[20px] leading-[28px] max-lg:hidden">
                      Meet customers <FaLongArrowAltRight className="w-[24px] h-[24px] ml-4"/>
                    </button>
                  </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customers;