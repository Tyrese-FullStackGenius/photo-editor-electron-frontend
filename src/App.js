import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import router from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(router)} />
    </Provider>
  );
};

export default App;
