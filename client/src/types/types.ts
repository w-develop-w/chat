export type MessageData = {
    room: string
    userName: string
    message: string
    time: string
}

export type RootState = {
    currentMessage: string
    messageList: MessageData[]
    userName: string
    room: string
    showChat: boolean
}

export type Props = {
    socket: any 
    userName: string
    room: string
}