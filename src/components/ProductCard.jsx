import "./ProductCard.css";

const ProductCard = ({ product }) => {
    if (!product) return null;
    const { productImage, productName, type, price, isSale } = product;
    return (
        <article
            className="product-card"
            role="listitem"
            aria-label={`Product: ${productName}${isSale ? " (On Sale)" : ""}`}
            tabIndex={0}
        >
            <img
                src={`/images/${productImage}`}
                alt={productName ? productName : "Product image"}
                className="product-image"
            />
            <div className="product-info">
                <h3 className="product-name" id={`product-name-${productName}`}>
                    {productName ?? ""}
                </h3>
                <p className="product-type" aria-label="Product type">
                    {type ?? "type N/A"}
                </p>
                <p className="product-price" aria-label="Product price">
                    {price ? `${price}` : "Price N/A"}
                </p>
                {isSale && (
                    <span
                        className="sale-badge"
                        aria-label="On Sale"
                        role="status"
                    >
                        Sale
                    </span>
                )}
            </div>
        </article>
    );
};

export default ProductCard;
