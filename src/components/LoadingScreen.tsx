import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"loading" | "fadeout" | "done">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fadeout"), 2000);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      style={{
        opacity: phase === "fadeout" ? 0 : 1,
        transition: "opacity 0.6s ease-out",
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo mark */}
        <div
          className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6"
          style={{
            animation: "loading-fade-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
            opacity: 0,
          }}
        >
          <span className="text-primary-foreground font-bold text-2xl">М</span>
        </div>

        {/* Progress line */}
        <div
          className="h-[2px] w-48 overflow-hidden rounded-full bg-border"
          style={{
            animation: "loading-fade-in 0.5s ease 0.6s forwards",
            opacity: 0,
          }}
        >
          <div
            className="h-full rounded-full bg-primary"
            style={{
              animation: "loading-line 1.4s cubic-bezier(0.4,0,0.2,1) 0.8s forwards",
              transformOrigin: "left",
              transform: "scaleX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
