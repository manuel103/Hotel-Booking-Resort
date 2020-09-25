import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <Hero>
      <Banner
        title="Luxurious rooms"
        subtitle="Quality rooms starting at ksh.3999"
      >
      <Link to="/rooms" className="btn-primary">
          Our rooms
      </Link>
      </Banner>
    </Hero>
  );
}
