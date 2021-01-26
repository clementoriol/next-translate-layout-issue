import React from "react";
import { LayoutTree } from "@moxy/next-layout";

const App = ({ Component, pageProps }) => {
  console.log({ Component });
  return <LayoutTree Component={Component} pageProps={pageProps} />;
};

export default App;
