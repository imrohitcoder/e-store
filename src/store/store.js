import cartReducer from "./CartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
