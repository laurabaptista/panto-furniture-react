import "./App.css";

import Header from "./Header";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import BestSelling from "./BestSelling";
import Experience from "./Experience";
import Materials from "./Materials";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <WhyUs />
      <BestSelling />
      <Experience />
      <Materials />
      <Testimonials />
      <Footer />
    </main>
  </>
);

export default App;
