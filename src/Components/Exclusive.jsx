import React, { useState } from "react";

const Exclusive = () => {
  const [mail, setMail] = useState(" ");
  const handelMail = (e) => {
    setMail(e.target.value);
    //setMail("");
  };
  const handelMailButton = () => {
    if (!mail) {
      alert("Please enter the mail");
    } else {
      alert(`sucessfully subscribed to  ${mail}`);
    }
    setMail("");
  };
  return (
    <div className="h-screen flex justify-center items-center  ">
      <div className="bg-gradient-to-br from-purple-300 to-white h-[70%] w-[70%] space-y-4">
        <div className="flex  justify-center items-center text-4xl font-bold mt-32 ">
          Get Exclusive offer On Mail
        </div>
        <div className="flex  justify-center items-center text-2xl font-semibold">
          Subscribe and stay updated
        </div>
        <div className="flex justify-center items-center ">
          <div className=" p-2 w-1/3">
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
    </div>
  );
};

export default Exclusive;
