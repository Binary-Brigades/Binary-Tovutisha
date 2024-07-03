import React, { useState } from "react";
import Header from "../Components/Common/Header";
import Sidebar from "../Components/Common/Sidebar";
import Hero from "../Components/Homepage/Hero";
import Wedo from "../Components/Homepage/Wedo";
import Progress from "../Components/Homepage/Progress"
import Testimonials from "../Components/Homepage/Testimonials";
import Footer from "../Components/Common/Footer";



function Homepage() {
    const [showSideBar,setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <Wedo />
      <Progress />
      <Testimonials />
      <Footer />     
    </div>
  );
}
export default Homepage;