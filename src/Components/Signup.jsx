import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShopData } from "./Context/ShopContext";

const Signup = () => {
  const navigate = useNavigate();

  const { name, setName, email, setEmail, Password, setPassword, setLogin } =
    useContext(ShopData);

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelButton = () => {
    if (name.length <= 0 || email.length <= 0 || Password.length <= 0) {
      toast.warning("Please fill all the box");
    } else {
      setLogin(true);
      /*  setEmail("");
      setName("");
      setPassword(""); */
      navigate("/");
      toast.success("Sucessfully register");
    }
  };
  return (
    <div className="flex justify-center  h-full">
      <div className="shadow-2xl p-4 h-fit space-y-4 m-10 bg-purple-200">
        <div className=" ml-6 text-2xl uppercase font-mono font-bold">
          sign up
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Your name"
            className="p-3  border-2 ml-5 w-[90%]"
            value={name}
            onChange={handelName}
          />
        </div>
        <div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="p-3  border-2 ml-5 w-[90%]"
            value={email}
            onChange={handelEmail}
          />
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="p-3  border-2 ml-5 w-[90%]"
            value={Password}
            onChange={handelPassword}
          />
        </div>
        <div
          className="flex items-center justify-center bg-orange-500 h-16 m-10 cursor-pointer"
          onClick={handelButton}
        >
          <button className="font-mono font-bold text-white text-xl">
            Continue
          </button>
        </div>
        <div className="ml-5">
          <div>
            Already have an account ?
            <Link to="/login">
              <span className="text-orange-600">click here</span>
            </Link>
          </div>
        </div>
        <div className="ml-5">
          <input type="checkbox" name="" id="" />
          By continue, I agree to the terms of use & private policys
        </div>
      </div>
      <ToastContainer />;
    </div>
  );
};

export default Signup;
