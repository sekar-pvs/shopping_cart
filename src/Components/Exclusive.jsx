import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

const Exclusive = () => {
  const [mail, setMail] = useState(" ");
  const handelMail = (e) => {
    setMail(e.target.value);
  };
  const handelMailButton = () => {
    if (!mail) {
      toast.error("Please enter the mail");
    } else {
      toast.success(`Now we are connect together`);
    }
    setMail("");
  };
  return (
    <div className="h-96 md:h-screen flex justify-center items-center md:p-0  ">
      <div className="bg-gradient-to-br from-purple-300 to-white  md:h-[70%] md:w-[70%] w-[90%] h-[60%]  space-y-4">
        <div className="flex  justify-center items-center text-2xl md:text-4xl font-bold md:mt-32 mt-10">
          Get Exclusive offer On Mail
        </div>
        <div className="flex  justify-center items-center text-lg font-semibold">
          Subscribe and stay updated
        </div>
        <div className="flex justify-center items-center p-5 md:p-0 ">
          <div className=" p-2 w-full md:w-1/3 ">
            <input
              type="text"
              placeholder="Your Mail Id..."
              className="h-12 w-full rounded-xl  "
              onChange={handelMail}
              value={mail}
            />
          </div>

          <div className="font-medium text-xl bg-red-500 p-2 rounded-xl text-white">
            <button onClick={handelMailButton}>subscribe</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Exclusive;
