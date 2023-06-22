import React from "react";
import island from "../assets/island.jpeg";
import Image from "next/image";
import Quotes from "../Quotes";
import Link from "next/link";
import BannerImg from "../assets/banner.png";
const Banner = (props: props) => {
  return (
    <section
      style={{ height: props.home ? "90vh" : 400, position: "relative" }}
      id="home"
    >
      <Image
        src={island}
        alt="Island image"
        style={{ zIndex: -1 }}
        fill={true}
      />
      <h1 style={{ zIndex: 10, color: "midnightblue" }}>{props.heading}</h1>
      {props.home && (
        <Link
          href="/locations"
          style={{
            position: "absolute",
            right: 32,
            bottom: "50%",
            transform: "translateY(50%)",
            borderRadius: 10,
            cursor: "pointer",
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <Image
            src={BannerImg}
            alt="CTA Paper"
            style={{ zIndex: -1 }}
            fill={true}
          />
          <p style={{ paddingLeft: 32, paddingRight: 32 }}>
            Explore What Our Island Has To Offer
          </p>
        </Link>
      )}
      {props.home && (
        <section className="Summary" style={{ color: "midnightblue" }}>
          Discover Taniti, a tropical paradise in the Pacific with diverse
          landscapes, pristine beaches, rainforests, and a vibrant indigenous
          culture.
          <Quotes />
        </section>
      )}
    </section>
  );
};

type props = {
  heading: string;
  home?: boolean;
};
export default Banner;
