import {FaLongArrowAltRight} from "react-icons/fa";


const DemoPage = () => {
  return (
    <section className="pt-[130px] pb-[32px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[64px] max-lg:text-[55px] max-lg:text-center text-[#263238] leading-[76px] mb-[32px]">
            Pellentesque suscipit <br/> fringilla libero eu.
          </h1>
          <button className="bg-[#4CAF4F] text-white px-[32px] py-[14px] rounded-[4px] flex items-center">
            Get a Demo
            <FaLongArrowAltRight className="ml-[8px]"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DemoPage;