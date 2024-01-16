import React from "react";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";


function Home() {
  return (
    <div>
      <Announcements></Announcements>
            <Navbar></Navbar>
            <Slider></Slider>
            <Categories></Categories>
            <Products></Products>
        <Newsletter></Newsletter>
    </div>
  );
}

export default Home;
