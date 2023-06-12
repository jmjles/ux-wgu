"use client";
import Image from "next/image";
import Map from "./Map";
import "./globals.css";
import Quotes from "./Quotes";
import Events from "./Events";
import island from "./assets/island.jpeg";
import Reviews from "./reviews";
export default function Home() {
  return (
    <main>
      <nav >
        <a href="#home" >Home</a>
        <a href="#events">Events</a>
        <a href="#map">Map</a>
        <a href="#FAQ">FAQ</a>
        <a href="#reviews">Review</a>
      </nav>
      <div className="Main">
        <section style={{ height: 300, position: "relative" }} id="home">
          <Image
            src={island}
            alt="Island image"
            style={{ zIndex: -1 }}
            fill={true}
          />
          <h1 style={{ zIndex: 10 }}>Welcome to Tanitia</h1>
        </section>
        <section className="Summary">
          Discover Taniti, a tropical paradise in the Pacific with diverse
          landscapes, pristine beaches, rainforests, and a vibrant indigenous
          culture.
          <Quotes />
        </section>
        <Events />
        <Map />
        <section id="FAQ">
          <h2>Frequently Requested Information: </h2>
          <ul>
            <li>
              Power outlets are 120 volts (the same as in the United States).
            </li>
            <li>
              Alcohol is not allowed to be served or sold between the hours of
              midnight and 9:00 a.m.
            </li>
            <li>
              The drinking age on Taniti is 18 and the drinking age is not
              strictly enforced.
            </li>
            <li>
              Many younger Tanitians speak fluent English. Very little English
              is spoken in rural areas, especially by the older residents.
            </li>
            <li>
              There is one hospital and several clinics. The hospital has many
              multilingual employees.
            </li>
            <li>
              Violent crime is very rare on Taniti, but as tourism increases,
              there are more reports of pickpocketing and other petty crimes.
            </li>
            <li>
              Taniti enjoys a large number of national holidays, and many
              tourist attractions and restaurants will be closed on holidays, so
              visitors should plan accordingly.
            </li>
            <li>
              Taniti uses the U.S. dollar as its currency, but many businesses
              will also accept euros and yen. Several banks facilitate currency
              exchange, and many businesses accept major credit cards.
            </li>
          </ul>
        </section>
        <Reviews />
      </div>
    </main>
  );
}
