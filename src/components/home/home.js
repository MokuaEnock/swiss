import React from "react";
import "./home.css";

import MainSection from "./mainsection";
import Services from "./services";

export default function Home() {
  return (
    <main className="main">
      <MainSection />
      <Services />
    </main>
  );
}
