// import { configureStore } from "@reduxjs/toolkit";
// import dataOfChatReducer from "./dataSlice";


// const store = configureStore({
//   reducer: {
//     dataOfChat: dataOfChatReducer,
//   }
// });


// export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


// import { configureStore } from "@reduxjs/toolkit";
// import dataOfChatReducer from "./dataSlice";

// const store = configureStore({
//   reducer: {
//     dataOfChat: dataOfChatReducer,
//   },
// });

// export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;



import { configureStore } from "@reduxjs/toolkit";
import dataOfChatReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    dataOfChat: dataOfChatReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
