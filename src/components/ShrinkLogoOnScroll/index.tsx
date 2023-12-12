"use client" 
/* eslint-disable @next/next/no-img-element */

import { stylesWithCssVar } from "@/utils/useCssVar";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  shrinkLogo: 0.45,
};

export const ShrinkLogoOnScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const logoOpacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.shrinkLogo
    ],
    [1, 1, 0]
  )
  const logoScale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.shrinkLogo
    ],
    [2, 0]
  )
    const logoY = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.shrinkLogo
    ],
    ['-300px', '400px']
  )
    const logoX = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.shrinkLogo
    ],
    ['0px', '0px']
  )

  return (
    <section ref={targetRef}>
      <div className="relative h-[500vh]">
        <div className="sticky top-1/2 flex">
          <motion.div
            className="offset absolute top-1/2 flex w-[50vw] -translate-y-[var(--y)] -translate-x-[var(--x)]  scale-[var(--scale)]"
            style={stylesWithCssVar({
              opacity: logoOpacity,
              "--scale": logoScale,
              "--y": logoY,
              "--x": logoX
            })}
          >
            <img src="/logo.png" className="h-auto w-[80%]" alt=""/>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};
