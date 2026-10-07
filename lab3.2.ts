abstract class shippingCalculator{
    constructor(protected baseP:number){}
    abstract calsentW(W:number):void;
}

class StamdardShipping extends shippingCalculator{
    constructor(baseP:number, private sent_G: number){
        super(baseP)
    }
    calsentW(W:number): void {
        console.log(`ค่าจัดส่ง : ${this.baseP+W*this.sent_G}`)
    }
}

class ExpressShipping extends shippingCalculator{
    constructor(baseP:number, private sent_faster: number){
        super(baseP)
    }
    calsentW(W:number): void {
        console.log(`ค่าจัดส่ง : ${this.baseP+W*20*this.sent_faster}`)
    }
}

const test = new StamdardShipping(100,5);
const test2 = new ExpressShipping(100,5);
test.calsentW(10);
test2.calsentW(10);