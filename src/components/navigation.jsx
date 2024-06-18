import React, { useEffect } from "react";
import { TonConnectButton, TonConnectUIProvider, useTonConnectUI } from "@tonconnect/ui-react";

export const Navigation = () => {
  const { connectWallet } = useTonConnectUI();

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            {" "}
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Human Credo
          </a>{" "}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="/#about" className="page-scroll">
                About project
              </a>
            </li>
            <li>
              <a href="/stan_miniapp" className="">
                Tokenminds
              </a>
            </li>

            <li>
              <header>
                <TonConnectButton />
              </header>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
