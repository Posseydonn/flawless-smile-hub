import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"text" | "fadeout" | "done">("text");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fadeout"), 2800);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, hsl(0 65% 42%) 0%, hsl(0 50% 25%) 60%, hsl(168 40% 20%) 100%)",
        opacity: phase === "fadeout" ? 0 : 1,
        transition: "opacity 0.6s ease-out",
      }}
    >
      {/* Subtle teal glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(168 76% 42%) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-xl px-8 text-center">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          style={{
            color: "hsl(0 0% 100%)",
            animation: "loading-fade-in 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards",
            opacity: 0,
            lineHeight: 1.15,
          }}
        >
          Путь к идеальной улыбке начался уже сейчас
        </h1>

        <div className="mt-10 flex justify-center">
          <div
            className="h-[2px] w-48 overflow-hidden rounded-full"
            style={{ backgroundColor: "hsl(0 0% 100% / 0.15)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, hsl(0 65% 60%), hsl(168 76% 50%))",
                animation: "loading-line 2.2s cubic-bezier(0.4,0,0.2,1) 0.8s forwards",
                transformOrigin: "left",
                transform: "scaleX(0)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
