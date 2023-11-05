import { community } from "../index";

const Community = () => {
  return (
    <section className="pt-[130px]">
        <div className="container">
            <div className="flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <h2 className="text-[#4D4D4D] text-[36px] leading-[44px] font-medium mb-3">
                    Manage your entire community<br/> in a single system
                  </h2>
                  <p className="text-[#717171] text-[16px] leading-[24px]">
                    Who is Nextcent suitable for?
                  </p>
                </div>

                <div className="flex max-lg:flex-col mx-auto">
                  {
                    community.map((item)=>(
                      <div key={item.id} className="max-w-[350px] max-lg:mb-10 mb-0 mx-7 max-lg:mx-0">
                        <img
                          src={item.icon}
                          alt="communityIcons"
                          className="mx-auto"
                        />

                        <h3 className="text-[#4D4D4D] text-[28px] font-medium w-[250px] mx-auto">
                          {item.title}
                        </h3>

                        <p>
                          {item.desc}
                        </p>
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Community;