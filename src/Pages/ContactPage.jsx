import React, { useState } from "react";
import Header from "../Components/Common/Header";
import Sidebar from "../Components/Common/Sidebar";
import Hero from "../Components/Contacts/ContactHero";
import Reachout from "../Components/Contacts/Reachout";
import LetsTalk from "../Components/Contacts/Letstalk";
import Map from "../Components/Contacts/Map"
import Footer from "../Components/Common/Footer";

function ContactPage(){
    const [showSideBar,setShowSidebar]= useState(false);
   return(
    <div>
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSideBar={showSideBar} />
        <Hero />
        <Reachout />
        <LetsTalk />
        <Map />
        <Footer />
    </div>
   );
}
export default ContactPage;