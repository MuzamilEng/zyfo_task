import { sidebar } from "../Data";

const Login = () => {
   
  return (
    <>
    <div className="container bg-[#2668E8] w-[20rem] h-screen relative ">
        <h1 className=" ml-2 p-2 text-4xl font-bold text-white">Logo</h1>
        {
            sidebar?.map((item, index) => {
                console.log(item);
                const {id, title, info, url} = item
                return <main key={id} className="m-2 p-2">
                <span className=" text-base text-white">{title}</span>
                <p className="text-sm text-gray-300 hover:underline cursor-pointer pt-2">{info}</p>
                </main>
            })
        }
        <span className=" absolute bottom-4 hover:underline cursor-pointer left-6 text-gray-300 text-sm">Design & Develop by khan studio</span>
    </div>
    </>
  )
}

export default Login