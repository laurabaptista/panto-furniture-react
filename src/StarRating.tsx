type StarRatingTypes = {
  rating: number;
};

function StarRating({ rating }: StarRatingTypes) {
  const stars = [];
  for (let contador = 1; contador <= rating; contador++) {
    stars.push(contador);
  }
  return (
    <div className="product-stars">
      {stars.map((star) => (
        <img key={star} src="/icons/Star.svg" alt="star" />
      ))}
    </div>
  );
}

export default StarRating;
