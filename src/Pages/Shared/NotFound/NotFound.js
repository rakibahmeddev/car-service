import React from "react";
import notFound from "../../../images/404/404.gif";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
