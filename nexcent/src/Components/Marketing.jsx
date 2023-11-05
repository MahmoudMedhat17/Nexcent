import { marketing } from "../index";
import {FaLongArrowAltRight} from "react-icons/fa";

const Marketing = () => {
  return (
    <section className="pt-[130px]">
        <div className="container">
            <div className="flex flex-col justify-center items-center">
                <div className="mb-[16px] text-center max-w-full">
                  <h2 className="text-[#4D4D4D] text-[36px] font-medium leading-[44px]">
                    Caring is the new marketing
                  </h2>
                  <p className="text-[#717171] text-[16px] leading-[24px] w-[628px] max-w-full">
                    The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lot is more.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] w-full max-w-full">
                  {
                    marketing.map((item)=>(
                      <div key={item.title} className="mx-auto">
                        <img
                          src={item.img}
                          alt="Image"
                          className="w-[368px] h-[286px]"
                        />

                        <div className="bg-[#F5F7FA] p-[16px] text-center text-[20px] w-[317px] relative bottom-20 left-6 z-[100] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.1)]">
                          <h4 className="w-[285px] h-[84px] text-[#717171] leading-[28px] font-medium mb-[16px]">
                            {item.title}
                          </h4>
                          <button className="flex items-center mx-auto text-[#4CAF4F] leading-[28px] font-semibold">
                            {item.desc} <FaLongArrowAltRight className="w-[24px] h-[24px] ml-[8px]"/>
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Marketing;