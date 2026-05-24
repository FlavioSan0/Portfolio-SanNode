"use client";

import type React from "react";

type FallingPatternProps = React.ComponentProps<"div"> & {
  color?: string;
  backgroundColor?: string;
  duration?: number;
  density?: number;
  opacity?: number;
};

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function FallingPattern({
  color = "rgba(0,217,255,0.35)",
  backgroundColor = "#040B14",
  duration = 120,
  density = 1,
  opacity = 0.75,
  className,
  style,
  ...props
}: FallingPatternProps) {
  const size = Math.round(280 * density);

  return (
    <div
      className={cx("relative h-full w-full overflow-hidden", className)}
      style={{
        backgroundColor,
        ...style,
      }}
      {...props}
    >
      <div
        className="sannode-falling-pattern absolute inset-0"
        style={
          {
            "--sannode-pattern-color": color,
            "--sannode-pattern-size": `${size}px`,
            "--sannode-pattern-duration": `${duration}s`,
            opacity,
          } as React.CSSProperties
        }
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,11,20,0.12), rgba(4,11,20,0.42))",
        }}
      />
    </div>
  );
}