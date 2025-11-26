import ProductCard from "./ProductCard";
import { products } from "../data";
import "./ProductList.css";

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    );
};

export default ProductList;

