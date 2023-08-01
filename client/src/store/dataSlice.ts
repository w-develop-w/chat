import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type MessageList = [
    room: string,
    userName: string,
    message: string,
    time: string
]

type RootState = {
    currentMessage: string,
    messageList: MessageList[]
}

const initialState: RootState = {
    currentMessage: "",
    messageList: []
}

const dataOfChatSlice = createSlice({
    name: "dataOfChat",
    initialState,
    reducers: {
        setCurrentMessage: (state, action: PayloadAction<string>) => {
            state.currentMessage = action.payload
        },
        setMessageList: (state, action: PayloadAction<MessageList[]>) => {
            state.messageList = action.payload
        }
    },
})

export const { setCurrentMessage, setMessageList } = dataOfChatSlice.actions
export default dataOfChatSlice.reducer
