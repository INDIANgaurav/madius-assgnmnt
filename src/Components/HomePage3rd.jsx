 
import { BsArrowRightCircle } from "react-icons/bs";
const HomePage3rd = () => {
  return (
    <div className="mt-32">
      <div className="flex justify-between items-end sm:px-20 ">
        <h1 className="font-semibold  sm:text-6xl leading-[50px]"> Got questions? <br />
        We've got answers</h1>

        <div>
            <button   className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider    hover:shadow-[0_0_0_4px_inset] h-12 px-6 py-3 w-auto">our products</button>
            <button   className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider    hover:shadow-[0_0_0_4px_inset] h-12 px-6 py-3 w-auto"> calculators</button>
            <button   className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider    hover:shadow-[0_0_0_4px_inset] h-12 px-6 py-3 w-auto">Guides & FAQs</button>
        </div>
      </div>


        <div>
            <div className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10">
            <h1>Buying your first home with Better</h1>
            <BsArrowRightCircle />

            </div>
        </div>
    </div>
  )
}

export default HomePage3rd
