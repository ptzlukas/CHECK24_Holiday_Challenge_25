"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationWave from "@/public/Wave_Progress.json"; 

export default function WaveTransition({ trigger }: { trigger: boolean }) {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    if (trigger) {
      // Warte auf Lottie-Dauer (~1.5s), dann zeige Inhalt
      const timeout = setTimeout(() => {
        setAnimationDone(true);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return (
    <>
      {/* Animited Wave */}
      {!animationDone && trigger && (
        <div className="fixed inset-0 z-50">
          <Lottie
            animationData={animationWave}
            autoplay
            loop={false}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      {/* After Animation */}
      {animationDone && (
        <div className="absolute inset-0 bg-[#3b82f6] z-0 flex items-center justify-center">
          {/* Hier dein neues UI z. B. Eingabefeld */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <input
              type="text"
              placeholder="Where to?"
              className="px-4 py-2 border rounded-md w-64 text-gray-800"
            />
          </div>
        </div>
      )}
    </>
  );
}
