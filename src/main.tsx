import "./index.css";
import "./polyfills";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import { ContractContextProvider } from "./contexts/ContractContext";
import { Sepolia } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect({
          projectId: "YOUR_PROJECT_ID",
        }),
      ]}
      clientId="f834ca0ad370cc60524088a7152429eb"
      activeChain={Sepolia}
    >
      <ContractContextProvider>
        <App />
      </ContractContextProvider>
      <Toaster />
    </ThirdwebProvider>
  </React.StrictMode>
);
