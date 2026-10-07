import { ProductDAO } from "./ProductDAO";
import { Product } from "./Product";

const product = new ProductDAO();
const productA = new Product(1, "Keyboard", 1200, 5 )

product.addProduct(productA);

console.log(productA.isAvaliable());

product.reduceStock(1,2)

product.findProductbyid(1);