const intialdata = {
  dishdata: [],
  likedDishdata: [],
  user_Data: [],
  isLoggdData: true,
};
export const basicReducer = (storedata = intialdata, action) => {
  if (action.type === "dishdata") {
    return {
      ...storedata,
      dishdata: action.payload,
    };
  } else if (action.type === "likedDish") {
    return {
      ...storedata,
      likedDishdata: action.payload,
    };
  } else if (action.type === "user_data") {
    return {
      ...storedata,
      user_Data: action.payload,
    };
  }
  //   else if (action.type === "isLoggedIn") {
  //     return {
  //       ...storedata,
  //       isLoggedIn: action.payload,
  //     };
  //   }
  return storedata;
};
