import React from "react";
import { Link } from "react-router-dom"



const Home = () => {
  return (
    <div>
      <div>Go Seamlessly with Us</div>

    <div className="">
        <button><Link to={"/register"}>Register</Link></button>
        <button><Link to={"/login"}>Login</Link></button>
    </div>
    </div>
  );
};

export default Home;
