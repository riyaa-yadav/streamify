import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";

const Overview = lazy(() => import("./pages/Overview"));
const Streams = lazy(() => import("./pages/Streams"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Overview />
          </Layout>
        }
      />
      <Route
        path="/streams"
        element={
          <Layout>
            <Streams />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
