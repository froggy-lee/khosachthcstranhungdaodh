import React from "react";
import BannerSection from "./BannerSection";
import ListBookSection from "./ListBookSection";
import OtherBookSection from "./OtherBookSection";
import StatisticalSection from "./StatisticalSection";

function HomePage() {
  return (
    <>
      <BannerSection />
      <ListBookSection />
      <OtherBookSection />
      <StatisticalSection />
    </>
  );
}

export default HomePage;
