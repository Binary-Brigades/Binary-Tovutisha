import React, { useState } from "react";
import Header from "../Components/Common/Header";
import Sidebar from "../Components/Common/Sidebar";
import Hero from "../Components/Donate/DonateHero";
import Footer from "../Components/Common/Footer";

function DonatePage(){
    const [showSideBar,setShowSidebar]= useState(false);
   return(
    <div>
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSideBar={showSideBar} />
        <Hero />
        <Footer />
    </div>
   );
}
export default DonatePage;