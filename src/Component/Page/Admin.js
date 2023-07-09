import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const data = useSelector((storedata) => {
    return storedata.user_Data;
  });
  console.log(data, "admin");
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.length > 0 && (
        <>
          {data.map((item) => {
            <div
              style={{
                display: "flex",
                color: "black",
                fontSize: "20px",
              }}
            >
              Email <span style={{ color: "gray" }}>{item.Name}</span>
            </div>;
          })}
        </>
      )}
    </div>
  );
};

export default Admin;
