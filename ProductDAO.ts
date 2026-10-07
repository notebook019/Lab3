import { BaseDAO } from "./BaseDAO";
import { Product } from "./Product";


export class ProductDAO extends BaseDAO {
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS Product (
            id INTEGER PRIMARY KEY ATOINCREMENT,
            name STRING NOT NULL,
            price INTEGER NOT NULL,
            stock INTEGER NOT NULL
            )
        `)
    }

    public addProduct(product:Product):boolean{
        const sql = `INSERT OR IGNORE INTO Product(id, name, price, stock) VALUES(?,?,?,?)`
        const result = this.db.prepare(sql).run(product)
        return result.changes > 0
    }

    public findProductbyid(id:number):Product|null{
        const sql = `SELECT * FROM Product WHERE id = ?`;
        const result = this.db.prepare(sql).get(id) as any;
        if (!result){
            return null
        }else{
            return new Product(result.id, result.name, result.price, result.stock)
        }
    }

    public reduceStock(id: number, amount:number){
        const sqlS = `SELECT * FROM Product WHERE id = ?`;
        const resultS = this.db.prepare(sqlS).get(id) as any;
        const s = new Product(resultS.id, resultS.name, resultS.price, resultS.stock)
        if(s.getstock()> amount){
            const sql = `UPDATE Product SET stock -= ? `
            const result = this.db.prepare(sql).run(amount)
            return result.changes > 0;
        }else console.log("stock is not enuogh")


    }

}