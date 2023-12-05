import "./index.css";
import "./polyfills";
import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import merge from "lodash.merge";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID! }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "climatex",
  projectId: "dc4767b73f7f7e42252135f30e752459",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const customTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#152A10",
    connectButtonBackground: "#152A10",
    connectButtonInnerBackground: "#152A10",
    // connectButtonText: "#fff",
  },
  radii: {
    connectButton: "24px",
  },
  // fonts: {
  //   body: "Happy Monkey, monospace",
  // },
} as Theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={customTheme}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
