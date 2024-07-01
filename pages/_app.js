import { wrapper } from "../store";
import "./../styles/globals.css";
import React from "react";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(App);
