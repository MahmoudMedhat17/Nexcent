import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="pt-[130px] bg-[#F5F7FA]">
      <div className="container">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center max-w-full mx-4 lg:mx-0">
          <div className="max-w-full">
            <h1 className="text-[50px] font-semibold text-[#4D4D4D] mb-5">
            Lessons and insights<br/> <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
            <p className="text-[#717171] w-[657px] max-w-full mb-8">
            Where to grow your business as a photographer: site or social media?
            </p>
            <Link to="/">
              <button className="bg-[#4CAF4F] text-white px-[32px] py-[14px] rounded-[4px]">
                Register
              </button>
            </Link>
          </div>

          <div className="mt-8">
            <img
              src="src/assets/images/illustration.svg"
              alt="illustrationImage"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;