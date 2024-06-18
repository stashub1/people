import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Tokenminds } from "./components/tokenminds/tokenminds";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  console.log("Version 5.0.0");
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <TonConnectUIProvider manifestUrl="https://humancredo.com/ton_manifest.json">
      <div>
        <Router>
          <Navigation />

          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Navigation />
                  <Header data={landingPageData.Header} />
                  <Features data={landingPageData.Features} />
                  <About data={landingPageData.About} />
                </div>
              }
            />
            <Route path="/stan_miniapp" element={<Tokenminds />} />
          </Routes>
        </Router>
      </div>
    </TonConnectUIProvider>
  );
};

export default App;
