// import * as React from 'react'

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Registration from "./components/registration";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="login" Component={Login} />
        <Route path="registration" Component={Registration} />
      </Routes>
    </HashRouter>
  );
};

export default App;
