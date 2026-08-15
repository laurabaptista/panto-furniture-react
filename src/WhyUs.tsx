import WhyUsItem from "./WhyUsItem";

const whyUsItems = [
  {
    title: "Luxury facilities",
    text: "The advantage of renting a workspace with us is that it provides comfort, convenience, and all the facilities you need here.",
  },
  {
    title: "Affordable Price",
    text: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only available here.",
  },
  {
    title: "Many Choices",
    text: "We offer a range of unique workspace options, allowing you to choose the one that best fits your needs and your working style.",
  },
];

function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us-container">
        <div className="why-us-left">
          <h2>Why Choosing Us</h2>
        </div>
        {whyUsItems.map((item, index) => (
          <WhyUsItem key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
