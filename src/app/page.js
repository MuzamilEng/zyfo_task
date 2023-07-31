import Login from './components/Login'
import Main from './components/Main'

const page = () => {
  return (
    <div className='flex w-screen h-screen items-center'>
      <Login />
      <Main />
    </div>
  )
}

export default page