import React from "react";
import island from "../assets/island.jpeg";
import Image from "next/image";
import Quotes from "../Quotes";
import Link from "next/link";

const Banner = (props: props) => {
  return (
    <section
      style={{ height: props.home ? "90vh" : 300, position: "relative" }}
      id="home"
    >
      <Image
        src={island}
        alt="Island image"
        style={{ zIndex: -1 }}
        fill={true}
      />
      <h1 style={{ zIndex: 10 }}>{props.heading}</h1>
      {props.home && (
        <Link
          href="/locations"
          style={{
            position: "absolute",
            right: 32,
            bottom: "50%",
            transform: "translateY(50%)",
            backgroundColor: "#F1EFE4",
            paddingLeft: 18,
            paddingRight: 18,
            borderRadius: 10,
            cursor: "pointer",
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <p style={{}}>Explore What Our Island Has To Offer</p>
        </Link>
      )}
      {props.home && (
        <section className="Summary">
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
