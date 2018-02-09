export class Room {
    _id?: string;
    messages?: Message[];
    gateway?: number;

    constructor(id) {
        this._id = id;
        this.gateway = 1;
        this.messages = [];
    }
}

export class Message {
    type: string;
    message: string;
    timestamp: Date;
    sessionId: string;

    constructor(type, message, sessionId) {
        this.sessionId = sessionId;
        this.type = type;
        this.message = message;
        this.timestamp = new Date();
    }
}
