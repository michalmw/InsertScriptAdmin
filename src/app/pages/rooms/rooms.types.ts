export class Room {
    _id: string;
    messages: Message[];

    constructor(id) {
        this._id = id;
        this.messages = [];
        this.messages.push(new Message(1, 'tresc'));
    }
}

export class Message {
    sender: number;
    text: string;
    createDate: Date;

    constructor(sender, text) {
        this.sender = sender;
        this.text = text;
        this.createDate = new Date();
    }
}
