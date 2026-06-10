// CSS-driven marquee strip. Duplicated content gives a seamless loop;
// honours prefers-reduced-motion via globals.css.
export default function Marquee({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const Item = ({ keyPrefix }: { keyPrefix: string }) => (
    <>
      {words.map((w, i) => (
        <span key={`${keyPrefix}-${i}`} className="inline-flex items-center">
          <span className="font-display display-lg italic px-[0.4em]">{w}</span>
          <span
            aria-hidden
            className="mx-[0.6em] inline-block h-1.5 w-1.5 rounded-full bg-bronze/70"
          />
        </span>
      ))}
    </>
  );

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <div className="marquee-track">
        <Item keyPrefix="a" />
        <Item keyPrefix="b" />
      </div>
    </div>
  );
}
