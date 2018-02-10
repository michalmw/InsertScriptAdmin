export class Gateway {
    _id: string;
    name: string;
    companyId: string;
    colors: Array<Colors>;
    side: string;
    fontSize: string;

    constructor() {
      this.name = '';
      this.companyId = '';
      this.colors = [];
      this.side = 'right';
      this.fontSize = "14px"
    }
  }

  export class Colors {
    name: string;
    color: string;
  
    constructor(
      name, color
    ) {
      this.name = name;
      this.color = color;
    }
  }