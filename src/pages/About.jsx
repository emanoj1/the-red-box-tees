import "../styles/About.css";

export default function About() {
  return (
    <main className="about">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-tagline">
          T-shirts that make you stop, smile, and think: <em>“I’d wear that!”</em>
        </p>
      </section>

      <section className="about-store">
        <h2>The Store</h2>
        <p>
          <strong>The Red Box Tees</strong> is all about creating T-shirts that make you stop, smile, and think,
          <em> “I’d wear that!”</em> Each design begins with something that captures our attention—an idea, a
          moment, a feeling—and ends up as art you can wear.
        </p>
        <p>
          We don’t follow trends; we follow curiosity. Whether it’s bold, quirky, thoughtful, or just plain fun,
          if it looks good on us, we’re sure it’ll look great on you too.
        </p>
        <p>
          All listings, payments, fulfilment, and returns are handled securely by <strong>Redbubble</strong>, our
          trusted print-on-demand partner.
        </p>
      </section>

      <section className="about-person">
        <h2>The Person Behind the Scenes</h2>

        <div className="about-person-grid">
          <figure className="about-photo">
            <img
              src="/assets/images/ManojRedBG.png"
              alt="Manoj Kumar — creator of The Red Box Tees"
              loading="lazy"
            />
          </figure>

          <div className="about-bio">
            <p>
              <strong>Hi, I’m Manoj Kumar</strong>, from Sydney, Australia - a one-person creative studio rolled
              into a single curious mind.
            </p>
            <p>
              By day, I work in digital technologies and project management. By night (and every inspired moment
              in between), I’m a blogger, full-stack web developer, YouTube vlogger & podcast host, indie author,
              aspiring cartoonist & sticker maker, spontaneous cook, budding graphic designer, and an avid
              daydreamer.
            </p>
            <p>
              Now, I’m adding <em>T-shirt designer</em> to that ever-growing list - and The Red Box Tees is where
              all those creative sparks come to life. A solo venture, powered by curiosity, coffee, and color.
            </p>
            <p className="vanity-url">
              <strong>Check Out My Ventures:</strong>{" "}
              <a
              href="https://bento.me/emanoj"
              target="_blank"
              rel="noopener noreferrer"
              >
                bento.me/emanoj
                </a>
            </p>

          </div>
          
        </div>
      </section>
    </main>
  );
}
