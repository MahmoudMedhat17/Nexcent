import { clientsIcons } from "../index";

const OurClients = () => {
  return (
    <section className="pt-[130px]">
        <div className="container">
            <div className="flex flex-col text-center">
                <div className="mb-10">
                    <h2 className="text-[36px] text-[#4D4D4D] font-semibold leading-[44px] mb-6">
                        Our Clients
                    </h2>
                    <p className="text-[16px] text-[#717171] leading-[24px]">
                        We have been working with some Fortune 500+ clients
                    </p>
                </div>

                <div>
                    <ul className="flex max-md:grid max-md:grid-cols-2">
                        {
                            clientsIcons.map((client)=>(
                                <li key={client.id} className="mx-auto">
                                    <img
                                        src={client.icon}
                                        alt="clientIcon"
                                        className="max-md:mb-2"
                                    />
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

export default OurClients;