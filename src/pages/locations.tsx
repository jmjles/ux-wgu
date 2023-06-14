import React from "react";
import "@/app/globals.css";
import Events from "../app/Events";
import Map from "../app/Map";
import Banner from "../app/components/Banner";
import Nav from "../app/components/Nav";
const Locations = () => {
  return (
    <main>
      <div className="Main">
        <Nav />
        <Banner heading="Tanities Events and Locations" />
        <Events />
        <Map />
      </div>
    </main>
  );
};

export default Locations;
