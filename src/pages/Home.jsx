import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Slider from "../components/Slider";


function Home() {
  return (
    <div>
      <Announcements></Announcements>
            <Navbar></Navbar>
            <Slider></Slider>
    </div>
  );
}

export default Home;
