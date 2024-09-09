import { LoginForm } from "../../components/login/LoginForm"

const Login = () => {
  return (
    <main className="flex flex-col gap-[40px] items-center h-screen justify-center pb-[200px]">
      <div className="w-1/3 ">
        <h1 className="text-center text-4xl mb-[50px]">Login</h1>
        <LoginForm />
      </div>
    </main>
  )
}

export default Login