import React, { useState } from "react";
import Header from "../Components/Common/Header";
import Sidebar from "../Components/Common/Sidebar";
import Hero from "../Components/Impact and Insights/ImpactHero";
import Theory from "../Components/Impact and Insights/Theory";
import Impact from "../Components/Impact and Insights/ImpactReport"
import Footer from "../Components/Common/Footer";

function ImpactPage(){
    const [showSideBar,setShowSidebar]= useState(false);
   return(
    <div>
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSideBar={showSideBar} />
        <Hero />
        <Theory />
        <Impact />
        <Footer/>
    </div>
   );
}
export default ImpactPage;