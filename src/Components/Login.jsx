import React from "react";

const Login = () => {
  return (
    <div className="h-screen  flex items-center justify-center p">
      <div className="grid justify-center items-center border-2 rounded-xl bg-gradient-to-l from-pink-400 to-white ">
        <div className="text-center">Login</div>
        <div>
          <form action="" className=" space-y-2 p-20 ">
            <div className="space-x-2">
              <label htmlFor="">User Name:</label>
              <input type="text" className=" border-2" />
            </div>
            <div className="space-x-2">
              <label htmlFor="">User Name:</label>
              <input type="text" className=" border-2" />
            </div>
            <div className="space-x-2">
              <label htmlFor="">User Name:</label>
              <input type="text" className=" border-2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
