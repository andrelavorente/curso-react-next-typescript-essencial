import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Repo } from "../pages/Repo";

export const Routes: React.FC = () => {
  return (
    <div className="Rotas">
      <BrowserRouter>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repo} path="/repositories/:repository+" />
      </BrowserRouter>
    </div>
  );
};
