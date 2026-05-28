import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";

import Admin from "../pages/Admin";

import Skills from "../pages/Skills";

import Projects from "../pages/Projects";

const AppRoutes = () => {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/admin"
        element={<Admin />}
      />

      <Route
        path="/skills"
        element={<Skills />}
      />

      <Route
        path="/projects"
        element={<Projects />}
      />

    </Routes>

  );

};

export default AppRoutes;