import React from "react";
import Header from "./Header";
import TopCards from "./TopCards";

function Content() {
  return (
    <div className="bg-gray-100 w-full flex flex-col gap-3 p-4">
      <Header />
      <TopCards />
    </div>
  );
}

export default Content;
