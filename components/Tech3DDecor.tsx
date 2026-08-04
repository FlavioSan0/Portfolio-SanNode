type Tech3DVariant = "cube" | "orbital" | "core" | "prism";

type Tech3DDecorProps = {
  variant: Tech3DVariant;
  className?: string;
};

export default function Tech3DDecor({
  variant,
  className = "",
}: Tech3DDecorProps) {
  return (
    <div
      className={`tech-3d tech-3d--${variant} ${className}`}
      aria-hidden="true"
    >
      {variant === "cube" ? <Cube /> : null}
      {variant === "orbital" ? <Orbital /> : null}
      {variant === "core" ? <Core /> : null}
      {variant === "prism" ? <Prism /> : null}
    </div>
  );
}

function Cube() {
  return (
    <div className="tech-3d__float tech-3d__scene">
      <div className="tech-3d__cube">
        <span className="tech-3d__cube-face tech-3d__cube-face--front" />
        <span className="tech-3d__cube-face tech-3d__cube-face--back" />
        <span className="tech-3d__cube-face tech-3d__cube-face--right" />
        <span className="tech-3d__cube-face tech-3d__cube-face--left" />
        <span className="tech-3d__cube-face tech-3d__cube-face--top" />
        <span className="tech-3d__cube-face tech-3d__cube-face--bottom" />
      </div>
      <span className="tech-3d__shadow" />
    </div>
  );
}

function Orbital() {
  return (
    <div className="tech-3d__float tech-3d__orbital">
      <span className="tech-3d__orbit tech-3d__orbit--one" />
      <span className="tech-3d__orbit tech-3d__orbit--two" />
      <span className="tech-3d__orbit tech-3d__orbit--three" />
      <span className="tech-3d__orbital-core" />
      <i className="tech-3d__orbital-node tech-3d__orbital-node--one" />
      <i className="tech-3d__orbital-node tech-3d__orbital-node--two" />
    </div>
  );
}

function Core() {
  return (
    <div className="tech-3d__float tech-3d__core">
      <span className="tech-3d__core-shell tech-3d__core-shell--one" />
      <span className="tech-3d__core-shell tech-3d__core-shell--two" />
      <span className="tech-3d__core-shell tech-3d__core-shell--three" />
      <span className="tech-3d__core-center" />
      <i className="tech-3d__core-point tech-3d__core-point--one" />
      <i className="tech-3d__core-point tech-3d__core-point--two" />
      <i className="tech-3d__core-point tech-3d__core-point--three" />
    </div>
  );
}

function Prism() {
  return (
    <div className="tech-3d__float tech-3d__prism-scene">
      <div className="tech-3d__prism">
        <span className="tech-3d__prism-layer tech-3d__prism-layer--one" />
        <span className="tech-3d__prism-layer tech-3d__prism-layer--two" />
        <span className="tech-3d__prism-layer tech-3d__prism-layer--three" />
        <span className="tech-3d__prism-layer tech-3d__prism-layer--four" />
      </div>
      <span className="tech-3d__prism-line" />
    </div>
  );
}
