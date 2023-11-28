"use client"

import OverviewCard from '@/components/OverviewCard';
import { stylesWithCssVar } from '@/utils/useCssVar';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { stickyVariant } from '@/styles/animations';

export default function ProductOverview() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const slideOver1 = useTransform(scrollYProgress, [0, 0.3], ["-1%", "-2%"]);
  // the 2nd slide is the third tile.
  const slideOver2 = useTransform(scrollYProgress, [0.3, 0.8], ["-2%", "-8%"]);

  return (
    <div
      className="bg-white py-32 sm:py-32 lg:py-24"
      id="#overview"
      ref={targetRef}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        className="px-8"
        variants={stickyVariant}
      >
        <OverviewCard
          category="First Item Category"
          text={[
            {
              header: "First Item",
              desc: "First Item",
            },
          ]}
        />
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={stickyVariant}
        style={stylesWithCssVar({
          "--translateY": slideOver1,
          // need to be able to pass in top as a prop to sticky variant?
        })}
        className="-translate-y-[var(--translateY)]"
      >
        <OverviewCard
          isSecondaryColor
          isDarkMode
          category="SDK"
          text={[
            {
              header: "Second",
              desc: "Second feature description.",
            },
           
          ]}
        />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={stickyVariant}
        style={stylesWithCssVar({
          "--translateY": slideOver2,
        })}
        className="-translate-y-[var(--translateY)]"
      >
        <OverviewCard
          isDarkMode
          category="Third Item"
          text={[
            {
              header: "Third Item Title.",
              desc: "Third Description",
            },
          ]}
        />
      </motion.div>
    </div>
  );
}
