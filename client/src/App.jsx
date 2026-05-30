import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import Loader from "./components/Loader";

import {
  useState,
  useEffect,
} from "react";

function App() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setLoading(false);

      }, 3000);

    return () =>
      clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;

  }

  return (

    <BrowserRouter>

      <AppRoutes />

    </BrowserRouter>

  );

}

export default App;