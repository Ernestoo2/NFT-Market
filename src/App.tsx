import "./App.css";
import "./styles/Global.css";
import DetailedPageUi from "./ui/DetailedPageUi";
import ListingPageUi from "./pages/ListingPage/ListingPageUi";
import React from "react";

function App() {
  return (
    <div className="bg-yellow-500 w-fit App">
      
      <ListingPageUi/>
      <DetailedPageUi/>
      
    </div>
  );
}

export default App;
