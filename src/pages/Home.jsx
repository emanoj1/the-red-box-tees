import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Tees, stickers, prints – made to stand out.</h1>
          <p className="hero-sub">Fun, punchy designs. Printed & shipped by Redbubble.</p>
        </div>
        <div className="glow" aria-hidden="true"></div>
      </section>

      {/* Static showcase stays */}
      <Showcase />

      <section className="features">
        <div className="feature">
          <h3>Worldwide shipping</h3>
          <p>Redbubble fulfills globally with reliable carriers.</p>
        </div>
        <div className="feature">
          <h3>Quality blanks</h3>
          <p>Soft tees, crisp prints, and vivid colors across products.</p>
        </div>
        <div className="feature">
          <h3>Secure checkout</h3>
          <p>All payments & customer data handled by Redbubble.</p>
        </div>

      </section>
            {/* 🔽 New centered "Shop" button below features */}
            <div className="shop-cta">
        <a
          className="btn"
          href="https://www.redbubble.com/people/theredboxtees/shop"
          target="_blank"
          rel="noreferrer"
        >
          Check Out The Tees! →
        </a>
      </div>

    </div>
  );
}


