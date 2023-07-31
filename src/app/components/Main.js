import { loginPage } from "../Data"

const Main = () => {
  return (
    <div>
        <div className="w-full grid grid-cols-1 p-2 align-middle">
            <h1 className="text-4xl text-black font-bold">{loginPage.title}</h1>
            <p className="text-base pt-2 hover:underline text-gray-400">{loginPage.info}</p>
            <br />
            <div className="container grid grid-cols-2">
                {loginPage.data.map((item, index) => {
                    const { id,label, type, placeholder, button} = item
                    return <div key={id} className="grid gap-2 m-3">
                        <label htmlFor={label}>{label}</label>
                        <input type={type} placeholder={placeholder || (item?.type === 'file') && "max file size 10mb" } className="w-[30rem] p-2 border-2 border-[#B4C7ED] rounded-md focus:outline-none" />
                    </div>
                })}
            </div>
        </div>
            <button type="button" className="bg-[#2668E8] p-3 w-[12rem] ml-4 pl-2 text-white font-bold hover:bg-[#4d7ee0] rounded-md">Login</button>
    </div>
  )
}

export default Main