import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="shadow-2xl p-4  space-y-5 m-10 bg-purple-200 w-[30%] h-[70%] ">
        <div className=" ml-6 text-2xl uppercase font-mono font-bold text-center">
          {" "}
          Login
        </div>
        <div>
          <div className="text-xl font-bold font-serif">Email :</div>
          <input
            type="text"
            placeholder="Email"
            className="p-3  border-2 ml-5 w-[90%]"
          />
        </div>
        <div>
          <div className="text-xl font-bold font-serif">Password :</div>
          <input
            type="password"
            placeholder="Password"
            className="p-3  border-2 ml-5 w-[90%]"
          />
        </div>
        <div className="flex items-center justify-center bg-orange-500 h-14 m-10 ">
          <button className="font-mono font-bold text-white text-xl">
            Login
          </button>
        </div>
        <div className="ml-5 cursor-pointer">Forget Password ?</div>
      </div>
    </div>
  );
};

export default Login;
