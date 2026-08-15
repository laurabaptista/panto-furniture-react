const Hero = () => (
  <section className="hero">
    <img
      src="/images/imagem-1-orange.jpg"
      alt="Hero background"
      className="hero-bg-img"
    />
    <div className="hero-content">
      <h1>Make Your Interior More Minimalistic & Modern</h1>
      <p>
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      <div className="search-bar">
        <input type="text" placeholder="Search furniture" />
        <button>
          <img src="/icons/search.svg" alt="Search" className="search-icon" />
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
