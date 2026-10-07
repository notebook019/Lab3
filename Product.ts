export class Product {
    constructor(private id:number, private name:string, private price:number, private stock:number){}

    getid(){return this.id};
    getname(){return this.name};
    getprice(){return this.price};
    getstock(){return this.stock};
    
    setid(x:number){this.id=x}
    setname(x:string){this.name=x}
    setprice(x:number){this.price=x}
    setstock(x:number){this.stock=x}

    isAvaliable():boolean{
        let status :boolean;
        if(this.stock > 0) status = true
        else status = false
        return status
    }
}