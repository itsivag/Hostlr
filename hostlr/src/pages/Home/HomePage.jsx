import React from "react";
import { StatusComponent } from "./components/StatusComponent";
import { HistoryComponent } from "./components/HistoryComponent";

export const HomePage = () => {
  return (
    <>
      <StatusComponent />
      <HistoryComponent />
    </>
  );
};
