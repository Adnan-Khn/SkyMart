import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0D0D0D] text-white px-5 flex flex-col items-center">
          <AppRoutes />
        </div>
    </>
  );
};

export default App;