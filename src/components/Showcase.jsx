export default function Showcase() {
    const items = [
      {
        title: "Ambitious Model",
        src: "/assets/showcase/ambitious-model.png",
        alt: "Ambitious model t-shirt design",
      },
      {
        title: "Face One",
        src: "/assets/showcase/face-1-model.png",
        alt: "Face design t-shirt mockup",
      },
      {
        title: "Skeleton Car",
        src: "/assets/showcase/skeleton-car-model.png",
        alt: "Skeleton driving car t-shirt design",
      },
    ];
  
    return (
      <section className="showcase">
        <h2 className="section-title">Featured designs</h2>
        <div className="showcase-grid">
          {items.map((item) => (
            <div key={item.title} className="card">
              <div className="img-wrap">
                <img
                  src={item.src}
                  alt={item.alt}
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="meta">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  