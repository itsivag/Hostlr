import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";
import { HistoryPage } from "./pages/HistoryPage";
import MyAppBar from "./Components/MyAppBar";
import { NotFound } from "./pages/NotFound";
import { RequestPage } from "./pages/RequestPage";
import { HomePage } from "./pages/Home/HomePage";

function App() {
  return (
    <div className="bg-neutral-200/70 h-screen">
      <MyAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* //{" "}
      <div className="flex flex-col space-y-4">
        // <MyAppBar />
        //{" "}
      </div> */}
    </div>
  );
}

export default App;
