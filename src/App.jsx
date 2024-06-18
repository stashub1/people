import React, { useState, useEffect } from "react";
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

import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  console.log("Version 4.0.0");
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <TonConnectUIProvider
      manifestUrl="https://humancredo.com/ton_manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/peoplecredo_bot",
      }}
    >
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
      </div>
    </TonConnectUIProvider>
  );
};

export default App;
