import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import AppOld from "./AppOld.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <AppOld /> */}
  </React.StrictMode>,
);
