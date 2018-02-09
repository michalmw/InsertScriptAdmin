export class Room {
    _id: string;
    messages: Message[];

    constructor(id) {
        this._id = id;
        this.messages = [];
        this.messages.push({
            sender: 1,
            text: 'tresc'
        });
    }
}

export class Message {
    sender: number;
    text: string;

    constructor(sender, text) {
        this.sender = sender;
        this.text = text;
    }
}
