import React, { useState } from "react";
import Header from "../Components/Common/Header";
import Sidebar from "../Components/Common/Sidebar";
import Weare from "../Components/Aboutus/Weare";
import Mission from "../Components/Aboutus/Mission";
import Team from "../Components/Aboutus/BoardMembers";
import Board from "../Components/Aboutus/TeamMembers";
import Footer from "../Components/Common/Footer";

function AboutusPage (){
    const [showSideBar,setShowSidebar] = useState(false);
  return(
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Weare />
      <Mission />
      <Team />
      <Board />
      <Footer/>
    </div>
  );
}
export default AboutusPage;