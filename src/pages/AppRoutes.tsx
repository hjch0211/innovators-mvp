import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";

/**
 * @description Register all routes
 */
import { Main } from "./Main";

export const AppRoutes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Main />} />
    </ReactRoutes>
  );
};
