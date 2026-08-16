import StarRating from "./StarRating";

type TestimonialCardTypes = {
  bgImage: string;
  avatar: string;
  name: string;
  role: string;
  text: string;
};

const TestimonialCard = ({
  bgImage,
  avatar,
  name,
  role,
  text,
}: TestimonialCardTypes) => (
  <div className="testimonial-card">
    <img src={bgImage} alt="room" className="testimonial-bg-img" />
    <img src="/icons/Union.svg" alt="" className="testimonial-union" />
    <div className="testimonial-info">
      <div className="testimonial-avatar-wrap">
        <img src={avatar} alt={name} className="testimonial-avatar" />
      </div>
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-role">{role}</p>
      <p className="testimonial-text">{text}</p>
      <StarRating rating={4} />
    </div>
  </div>
);

export default TestimonialCard;
