import React from "react";
import Layout from "./routes/Layout";
import { Provider } from "react-redux";
import { store } from "./Redux/config/StoreConfig";
import AuthContext from "./Auth/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      {/* auth config  */}
      <AuthContext>
        {/* page layout  */}
        <Layout />
      </AuthContext>
    </Provider>
  );
};

export default App;
