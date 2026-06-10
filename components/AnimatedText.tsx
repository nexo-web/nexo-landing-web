"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

function Word({
  children,
  progress,
  range,
  reduce,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduce: boolean | null;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span className="aw" style={{ opacity: reduce ? 1 : opacity }}>
      {children}{" "}
    </motion.span>
  );
}

/* Párrafo que se "ilumina" palabra por palabra según el scroll. */
export default function AnimatedText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const span = 1 / words.length;
        const start = Math.min(0.85, i * span + delay);
        const end = Math.min(1, start + span * 2);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} reduce={reduce}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}
