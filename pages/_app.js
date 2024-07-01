import { wrapper } from "../store";
import "./../styles/globals.css";
import React from "react";
// import { ConfigProvider } from "antd";

const App = ({ Component, pageProps }) => (
  // <ConfigProvider theme={theme}>
  <Component {...pageProps} />
  // </ConfigProvider>
);

export default wrapper.withRedux(App);
