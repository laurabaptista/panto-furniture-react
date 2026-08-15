const Materials = () => (
  <section className="materials-section">
    <div className="materials-content">
      <span className="section-label">Materials</span>
      <h2>Very Serious Materials For Making Furniture</h2>
      <p>
        Because panto was very serious about designing furniture for our
        environment, using a very expensive and famous capital but at a
        relatively low price
      </p>
      <a href="#" className="more-info">
        More Info
        <img src="/icons/arrow.svg" alt="arrow" />
      </a>
    </div>

    <div className="materials-images">
      <div className="materials-bg"></div>
      <div className="materials-blur blur-big"></div>
      <div className="materials-blur blur-small-top"></div>
      <div className="materials-blur blur-small-bottom"></div>

      <img src="/images/image-3b.png" alt="" className="small-img top-img" />
      <img src="/images/image-4b.png" alt="" className="small-img bottom-img" />
      <img src="/images/image-5b.png" alt="" className="big-img" />
    </div>
  </section>
);

export default Materials;
