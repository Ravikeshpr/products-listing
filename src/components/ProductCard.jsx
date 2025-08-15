import "./ProductCard.css";

const ProductCard = ({ product }) => {
    if (!product) return null;
    const { productImage, productName, type, price, isSale } = product;
    return (
        <article className={`product-card`}>
            <img
                src={`/images/${productImage}`}
                alt={productName ? productName : "Product image"}
                className="product-image"
            />
            <div className="product-info">
                <h3 className="product-name">{productName ?? ""}</h3>
                <p className="product-type">{type ?? "type N/A"}</p>
                <p className="product-price">
                    {price ? `${price}` : "Price N/A"}
                </p>
                {isSale && (
                    <span className="sale-badge" aria-label="On Sale">
                        Sale
                    </span>
                )}
            </div>
        </article>
    );
};

export default ProductCard;
