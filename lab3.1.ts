
interface PaymentMethod {
    creditcord:string;
    howpay:string;

    // checkbin(money: number): void{};
}

class paymentcredit implements PaymentMethod{
    constructor(public creditcord:string, public howpay:string){}
    checkbin(money: number): void {
        console.log(`ชำระเงิน ${money} บาท ชำระเงินด้วย ${this.howpay} หมายเลยบัตร ${this.creditcord} `)
    }
}

class paymentmoney implements PaymentMethod{
    constructor(public creditcord:string, public howpay:string){}
    checkbin(money: number): void {
        console.log(`ชำระเงิน ${money} บาท ชำระเงินด้วย ${this.howpay} หมายเลยบัตร ${this.creditcord}`)
    }
}

const user = new paymentcredit("12312121", "การ์ด");
const user2 = new paymentcredit("", "เงินสด");
user.checkbin(100);
user2.checkbin(100);