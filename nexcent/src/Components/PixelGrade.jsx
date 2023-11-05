
const PixelGrade = () => {
  return (
    <section className="pt-[130px]">
        <div className="container">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <img
                    src="src/assets/images/frame35.svg"
                    alt="frame35Logo"
                />

                <div className=" max-w-full">
                    <h2 className="text-[#4D4D4D] text-[36px] leading-[44px] font-medium mb-[16px]">
                        The unseen of spending three <br/> years at Pixelgrade
                    </h2>
                    <p className="text-[#717171] text-[14px] leading-[20px] mb-[32px] w-[601px] max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button className="bg-[#4CAF4F] text-white px-[32px] py-[14px] rouneded-[4px]">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PixelGrade;