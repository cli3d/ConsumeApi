export class Product {

    id: string;
    content: string;
    ownerID: string;

    public constructor(id: string, content: string, ownerID: string) { 
        this.id = id;
        this.content = content;
        this.ownerID = ownerID;
     };

}
