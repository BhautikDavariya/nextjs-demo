import React from "react";
import { Provider } from "react-redux";
import "./../styles/globals.css";
import { wrapper } from "@/store";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
