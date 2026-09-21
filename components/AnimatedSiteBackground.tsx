export default function AnimatedSiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0A1020]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(63,227,255,0.08),transparent_26%),radial-gradient(circle_at_82%_28%,rgba(30,144,255,0.08),transparent_30%),linear-gradient(180deg,#0A1020_0%,#0B1428_48%,#0A1020_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(63,227,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(63,227,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(10,16,32,0.72)_100%)]" />
    </div>
  );
}
