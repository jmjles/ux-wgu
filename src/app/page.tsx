"use client";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
export default function Home() {
  return (
    <main>
      <div className="Main">
        <Nav />
        <Banner heading="Welcome to Tanitia" home/>
      </div>
    </main>
  );
}
