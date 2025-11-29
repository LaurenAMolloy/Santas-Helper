import { TbChristmasTreeFilled } from "react-icons/tb";


export default function Header() {
  return (
    <div className='flex flex-row justify-center items-center w-full h-24 bg-black'>
      <div className="flex flex-col justify-center items-center">
        <TbChristmasTreeFilled className="text-white" size={40} />
        <h1 className='text-white tex-2xl pt-1'>Santa's Helper</h1>
      </div>
    </div>
  )
}
