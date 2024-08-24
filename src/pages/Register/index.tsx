import React from "react";
import { RegisterForm } from "../../components/register/RegForm";

const Register = () => {
  return (
    <main className="flex flex-col gap-[40px] items-center h-screen justify-center pb-[200px]">
      <div className="w-1/3 ">
        <h1 className="text-center text-4xl mb-[50px] ">Create Account</h1>
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
