import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Slider from "../components/Slider";
import Categories from "../components/Categories";


function Home() {
  return (
    <div>
      <Announcements></Announcements>
            <Navbar></Navbar>
            <Slider></Slider>
            <Categories></Categories>
    </div>
  );
}

export default Home;
