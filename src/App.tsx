import "./App.css";
import "./styles/Global.css";
import DetailedPageUi from "./ui/DetailedPageUi";
import FolderScem from "./components/FolderScem";
import ImageOverflow, { ImageOverflowData } from "./components/ImageOverflow";
import ListingPageUi from "./ui/ListingPageUi";
import React from "react";

function App() {
  return (
    <div className="App ">
      
      <ListingPageUi/>
      {/* <DetailedPageUi/> */}
      
    </div>
  );
}

export default App;
