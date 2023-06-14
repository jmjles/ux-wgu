import "@/app/globals.css";
import React from "react";
import Reviews from "../app/reviews";
import Nav from "@/app/components/Nav";
import Banner from "@/app/components/Banner";
const FAQ = () => {
  return (
    <main>
      <div className="Main">
        <Nav />
        <Banner heading="Questions and Comments" />
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
};

export default FAQ;
