import { Variants } from "framer-motion";


export const sentenceVariant: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const letterVariant: Variants = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1 },
};

export const splitText = (sentence: string) => {
  return sentence.split(' ');
};


export const fadeInVariant: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: -50,
    transition: {
      duration: 0.5,
    },
  },
};

export const stickyVariant: Variants = {
  offscreen: {
    top: 0,
    position: 'static',
  }, 
  onscreen: {
    top: 0,
    position: 'sticky',
  }
}

export const parentVariant:Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      ease: [0.32, 0.23, 0.4, 0.9],
      staggerChildren: 0.2,
    },
  },
};

export const childVariants:Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};
