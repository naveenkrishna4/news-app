import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update({
  setCategory,
  name,
  setname,
  email,
  setemail,
  password,
  setpassword,
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/update", { name, email, password })
      .then((res) => {
        setCategory("general");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cyan-200">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-center text-3xl block font-semibold">
          Update Profile
        </h1>
        <hr className="mt-3"></hr>
        <div className="mt-3">
          <label className="block text-base mb-2">Name</label>
          <input
            type="text"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600"
            placeholder="Enter name"
            onChange={(e) => setname(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div className="form group">
          <label htmlFor="password" className="block text-base mb-2">
            Password
          </label>
          <input
            type="password"
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600 "
            placeholder="Enter password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </div>

        <div className="mt-4 ">
          <button
            type="submit"
            className="border-2 border-black bg-blue-600 py-1 w-full rounded-md hover:bg-transparent font-bold"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
