const Experience = () => (
  <section className="experience-section">
    <div className="experience-image-area">
      <div className="experience-bg experience-bg-left"></div>
      <div className="experience-bg experience-bg-right"></div>
      <div className="experience-blur"></div>

      <img
        src="/images/image-2b.png"
        alt="Living room with sofa"
        className="experience-img"
      />
    </div>

    <div className="experience-content">
      <span className="section-label">Experiences</span>
      <h2>We Provide You The Best Experience</h2>
      <p>
        You don't have to worry about the result because all of these interiors
        are made by people who are professionals in their fields with an elegant
        and luxurious style and with premium quality materials
      </p>
      <a href="#" className="more-info">
        More Info
        <img src="/icons/arrow.svg" alt="arrow" />
      </a>
    </div>
  </section>
);

export default Experience;
