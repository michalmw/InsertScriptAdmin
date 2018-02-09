export interface Room {
    _id: string;
    messages: Message[];
}

export interface Message {
    sender: number;
    text: string;
}
