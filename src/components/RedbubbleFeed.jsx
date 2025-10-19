// src/components/RedbubbleFeed.jsx
export default function RedbubbleFeed({
  username = "theredboxtees",
  columns = 3,
  rows = 1,
  height = 500,
}) {
  const src = `/rb-embed.html?user=${encodeURIComponent(username)}&cols=${columns}&rows=${rows}`;
  return (
    <section className="rb-section">
      <h2 className="section-title">Latest drops</h2>
      <iframe
        className="rb-embed-iframe"
        title="Redbubble shop"
        src={src}
        width="100%"
        height={height}
        loading="lazy"
        style={{ border: 0, borderRadius: 14, outline: "1px solid rgba(124,240,255,0.12)" }}
      />
      <a
        className="btn center"
        href={`https://www.redbubble.com/people/${username}/shop`}
        target="_blank"
        rel="noreferrer"
      >
        See everything on Redbubble →
      </a>
    </section>
  );
}




