import { businessCard } from "../index";

const Business = () => {
  return (
    <section className="pt-[130px] bg-[#F5F7FA]">
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div>
                    <h2 className="text-[36px] text-[#4D4D4D] leading-[44px] font-medium">
                        Helping a local<br/> <span className="text-[#4CAF4F]">business reinvent itself</span>
                    </h2>
                    <p className="text-[#18191F]">
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div>
                    <ul className="grid grid-cols-1 lg:grid-cols-2">
                        {
                            businessCard.map((business)=>(
                                <li key={business.title} className="flex my-[40px] mx-[30px]">
                                    <img 
                                        src={business.icon} 
                                        alt="buisnessIcons"
                                        className="w-[48px] h-[48px] object-contain mr-[16px]" 
                                    />
                                    <div>
                                        <p className="text-[#4D4D4D] text-[28px] font-medium leading-[36px]">
                                            {
                                                business.number
                                            }
                                        </p>
                                        
                                        <p className="text-[#717171] text-[16px] leading-[24px] font-normal">
                                            {
                                                business.title
                                            }
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Business