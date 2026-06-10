"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";
import { KEYWORDS } from "@/lib/content";

/* mantiene v dentro de [min,max) para un loop sin costuras */
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

export default function Marquee() {
  const loop = [...KEYWORDS, ...KEYWORDS];
  const reduce = useReducedMotion();

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothV = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smoothV, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const dir = useRef(-1);
  useAnimationFrame((_t, delta) => {
    if (reduce) return;
    let moveBy = dir.current * 2.4 * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    moveBy += moveBy * Math.abs(f);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="marquee" aria-hidden>
      <motion.div className="marquee__track marquee__track--live" style={{ x }}>
        {loop.map((k, i) => (
          <span className="marquee__item" key={i}>
            <span>{k}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
