export class Room {
    _id: string;
    messages: Message[];
    gateway: number;

    constructor(id) {
        this._id = id;
        this.gateway = 1;
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
