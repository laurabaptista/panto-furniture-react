import StarRating from "./StarRating";

type ProductCardTypes = {
  category: string;
  name: string;
  price: string;
  image: string;
  rating: number;
};

function ProductCard({
  category,
  name,
  price,
  image,
  rating,
}: ProductCardTypes) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-img" />
      </div>
      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-name">{name}</h3>
        <StarRating rating={rating} />
        <div className="product-footer">
          <span className="product-price">
            <sup>$</sup> {price}
          </span>
          <button className="add-btn">
            <img src="/icons/add.svg" alt="add" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
