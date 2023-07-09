import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Style/dishdata.scss";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
const DishData = () => {
  let dispatch = useDispatch();

  const data = useSelector((storedata) => {
    return storedata.dishdata;
  });

  const fetchdata = async () => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`
      );
      const data = await response.json();

      console.log(data, "dishdata1");
      dispatch({
        type: "dishdata",
        payload: data,
      });
    } catch {
      console.log("error data");
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  console.log(data, "dishdataname1");
  return (
    <div className="card-Container">
      <div className="grid-container">
        {data.length > 0 &&
          data.map((item) => (
            <div className="grid-item">
              <div>
                <img
                  src={item.image}
                  height={200}
                  width={200}
                  alt="dish image"
                />
              </div>
              <div style={{ color: "gray", fontSize: "20px" }}>
                {item.dishName}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "80%",
                }}
              >
                <span>
                  Like <AiOutlineLike />
                </span>
                <span>
                  DisLike <BiDislike />
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DishData;
