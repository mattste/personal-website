import React from "react";
import Header from "../components/Header";
import "../styles/main.css";

const Container = props => (
  <div className="flex flex-col min-h-screen pt-5 pb-20 px-10 md:px-20">
    <Header />
    {props.children}
  </div>
);

export default Container;
