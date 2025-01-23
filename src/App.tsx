import "./App.css";
import "./styles/Global.css";
import DetailedPageUi from "./ui/DetailedPageUi";
import ListingPageUi from "./pages/ListingPage/ListingPageUi";
import React from "react";

function App() {
  return (
    <div className=" App">
      <div className="w-full h-full min-h-screen bg-[#060714] overflow-hidden">
      <ListingPageUi/>
      <DetailedPageUi/>
      
      </div>
      
    </div>
  );
}

export default App;
