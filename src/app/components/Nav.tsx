import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const route = usePathname();
  const home = route === "/";
  const events = route === "/locations";
  const faq = route === "/faq";
  return (
    <nav>
      <Link style={home ? selected : {}} href="/">
        HOME
      </Link>
      <Link style={events ? selected : {}} href="/locations">
        EVENTS
      </Link>
      <Link style={faq ? selected : {}} href="/faq">
        FAQ
      </Link>
    </nav>
  );
};
const selected = { backgroundColor: "#2D808B" };
export default Nav;
