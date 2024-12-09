import "./App.css";
import "./styles/Global.css";
import DetailedPageUi from "./ui/DetailedPageUi";
import ListingPageUi from "./pages/ListingPage/ListingPageUi";
import React from "react";

function App() {
  return (
    <div className="App w-[100%] max-w-[100%] ">
      
      <ListingPageUi/>
      <DetailedPageUi/>
      
    </div>
  );
}

export default App;
