type WhyUsItemTypes = {
  title: string;
  text: string;
};

const WhyUsItem = ({ title, text }: WhyUsItemTypes) => (
  <div className="why-us-item">
    <h3>{title}</h3>
    <p>{text}</p>
    <a href="#">
      More Info <img src="/icons/arrow.svg" alt="arrow" />
    </a>
  </div>
);

export default WhyUsItem;
