import { motion } from "framer-motion";

export const IntroPage = (Component) => {
  return (
    <>
      <Component />
      <motion.div
        className="bg-grayMain w-full h-screen fixed top-0 right-0 origin-bottom z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ delay:0.5,duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  )
}
