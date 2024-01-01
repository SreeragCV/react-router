import React from "react";
import MainNavigation from "../components/MainNavigation";

function Error() {
  return (
    <div>
      <MainNavigation />
      <main>
        <h1>An Error Occured..</h1>
        <p>could not find the page!!</p>
      </main>
    </div>
  );
}

export default Error;
