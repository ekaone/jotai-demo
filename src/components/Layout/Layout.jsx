import React from "react";
import { Link } from "@reach/router";

function Layout({ children }) {
  return (
    <>
      <div className="flex justify-center items-center p-10 border rounded-md m-2">
        <nav>
          <Link to="/" className="text-green-700 text-lg hover:text-red-700">
            StoragePersistence
          </Link>{" "}
          <span role="img" aria-label="divider">
            ❄
          </span>
          <Link
            to="/InputField"
            className="text-green-700 text-lg hover:text-red-700"
          >
            InputField
          </Link>
        </nav>
      </div>
      {children}
    </>
  );
}

export default Layout;
