type TrailItem = { label: string; muted?: boolean };

type NodeTrailProps = {
  items: readonly TrailItem[];
  className?: string;
};

/**
 * Elemento visual da San_Node: uma linha que liga pontos (nós),
 * como o S do logo. Usado no hero.
 */
export default function NodeTrail({ items, className = "" }: NodeTrailProps) {
  return (
    <ol className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="absolute bottom-3 left-[0.6875rem] top-3 w-0.5 rounded-full bg-gradient-to-b from-[#3FE3FF] to-[#1E90FF]"
      />
      {items.map((item) => (
        <li
          key={item.label}
          className="relative flex items-center gap-5 py-5"
        >
          <span
            aria-hidden="true"
            className={[
              "relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2",
              item.muted
                ? "border-[#3B5270] bg-[#0A1020]"
                : "border-[#3FE3FF] bg-[#0A1020] shadow-[0_0_0_6px_rgba(63,227,255,0.1)]",
            ].join(" ")}
          >
            <span
              className={`h-2 w-2 rounded-full ${item.muted ? "bg-[#3B5270]" : "bg-[#3FE3FF]"}`}
            />
          </span>
          <span
            className={
              item.muted
                ? "text-lg font-semibold text-[#7F93AD] line-through decoration-[#3B5270] decoration-2"
                : "text-xl font-extrabold text-[#F7FBFF] md:text-2xl"
            }
          >
            {item.label}
          </span>
        </li>
      ))}
    </ol>
  );
}
