// import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// type MessageData = {
//     room: string,
//     userName: string,
//     message: string,
//     time: string
// }

// type RootState = {
//     currentMessage: string
//     messageList: MessageData[]
// }

// const initialState: RootState = {
//     currentMessage: "hehehheh",
//     messageList: [
//         { room: "room1", userName: "user1", message: "message1", time: "time1" },
//         { room: "room2", userName: "user2", message: "message2", time: "time2" },
//         { room: "room3", userName: "user3", message: "message3", time: "time3" },
//       ],
// }

// const dataOfChatSlice = createSlice({
//     name: "dataOfChat",
//     initialState,
//     reducers: {
//         setCurrentMessage: (state, action: PayloadAction<string>) => {
//             state.currentMessage = action.payload
//         },
//         setMessageList: (state, action: PayloadAction<MessageData[]>) => {
//             state.messageList = action.payload
//         },
//     },
// })

// export const { setCurrentMessage, setMessageList } = dataOfChatSlice.actions
// export default dataOfChatSlice.reducer



// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type MessageData = {
//   room: string;
//   userName: string;
//   message: string;
//   time: string;
// }

// const initialState: RootState = {
//   currentMessage: "hehehheh",
//   messageList: [
//     { room: "room1", userName: "user1", message: "message1", time: "time1" },
//     { room: "room2", userName: "user2", message: "message2", time: "time2" },
//     { room: "room3", userName: "user3", message: "message3", time: "time3" },
//   ],
// };

// const dataOfChatSlice = createSlice({
//   name: "dataOfChat",
//   initialState,
//   reducers: {
//     setCurrentMessage: (state, action: PayloadAction<string>) => {
//       state.currentMessage = action.payload;
//     },
//     setMessageList: (state, action: PayloadAction<MessageData[]>) => {
//       state.messageList = action.payload;
//     },
//   },
// });

// export const { setCurrentMessage, setMessageList } = dataOfChatSlice.actions;
// export default dataOfChatSlice.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type MessageData = {
//   room: string;
//   userName: string;
//   message: string;
//   time: string;
// }

// type RootState = {
//   currentMessage: string;
//   messageList: MessageData[];
// }

// const initialState: RootState = {
//   currentMessage: "hehehheh",
//   messageList: [
//     { room: "room1", userName: "user1", message: "message1", time: "time1" },
//     { room: "room2", userName: "user2", message: "message2", time: "time2" },
//     { room: "room3", userName: "user3", message: "message3", time: "time3" },
//   ],
// };

// const dataOfChatSlice = createSlice({
//   name: "dataOfChat",
//   initialState,
//   reducers: {
//     setCurrentMessage: (state, action: PayloadAction<string>) => {
//       state.currentMessage = action.payload;
//     },
//     setMessageList: (state, action: PayloadAction<MessageData[]>) => {
//       state.messageList = action.payload;
//     },
//   },
// });

// export const { setCurrentMessage, setMessageList } = dataOfChatSlice.actions;
// export default dataOfChatSlice.reducer;



// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export type MessageData = {
//   room: string;
//   userName: string;
//   message: string;
//   time: string;
// };

// type RootState = {
//   currentMessage: string;
//   messageList: MessageData[];
// };

// const initialState: RootState = {
//   currentMessage: "hehehheh",
//   messageList: [
//     { room: "room1", userName: "user1", message: "message1", time: "time1" },
//     { room: "room2", userName: "user2", message: "message2", time: "time2" },
//     { room: "room3", userName: "user3", message: "message3", time: "time3" },
//   ],
// };

// const dataOfChatSlice = createSlice({
//   name: "dataOfChat",
//   initialState,
//   reducers: {
//     setCurrentMessage: (state, action: PayloadAction<string>) => {
//       state.currentMessage = action.payload;
//     },
//     setMessageList: (state, action: PayloadAction<MessageData[]>) => {
//       state.messageList = action.payload;
//     },
//   },
// });

// export const { setCurrentMessage, setMessageList } = dataOfChatSlice.actions;
// export default dataOfChatSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MessageData = {
  room: string;
  userName: string;
  message: string;
  time: string;
};

export type RootState = {
  currentMessage: string;
  messageList: MessageData[];
};

const initialState: RootState = {
  currentMessage: "hehehheh",
  messageList: [
    { room: "room1", userName: "user1", message: "message1", time: "time1" },
    { room: "room2", userName: "user2", message: "message2", time: "time2" },
    { room: "room3", userName: "user3", message: "message3", time: "time3" },
  ],
};

const dataOfChatSlice = createSlice({
  name: "dataOfChat",
  initialState,
  reducers: {
    setCurrentMessage: (state, action: PayloadAction<string>) => {
      state.currentMessage = action.payload;
    },
    setMessageList: (state, action: PayloadAction<MessageData[]>) => {
      state.messageList = action.payload;
    },
  },
});

export const { setCurrentMessage, setMessageList } = dataOfChatSlice.actions;
export default dataOfChatSlice.reducer;
