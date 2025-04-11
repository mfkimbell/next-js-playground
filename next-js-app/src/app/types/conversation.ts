
export type Conversation = {
    id: string,
    participants: string[],
    lastMessageText?: string,
    lastMessageTime?: Date
};
