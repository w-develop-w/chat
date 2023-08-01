import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MessageData,RootState } from '../types/types'

const initialState: RootState = {
    currentMessage: "",
    messageList: [],
    userName: "",
    room: "",
    showChat: false,
}

const dataOfChatSlice = createSlice({
    name: "dataOfChat",
    initialState,
    reducers: {
        setCurrentMessage: (state, action: PayloadAction<string>) => {
            state.currentMessage = action.payload
        },
        setMessageList: (state, action: PayloadAction<MessageData[]>) => {
            state.messageList = action.payload
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        setRoom: (state, action: PayloadAction<string>) => {
            state.room = action.payload
        },
        setShowChat: (state, action: PayloadAction<boolean>) => {
            state.showChat = action.payload
        },
    },
})

export const {
    setCurrentMessage,
    setMessageList,
    setUserName,
    setRoom,
    setShowChat,
} = dataOfChatSlice.actions
export default dataOfChatSlice.reducer
