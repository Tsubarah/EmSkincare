import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'



export default function SwipeInFromBottom({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const transition = {
    duration: 1,
    type: "swipeInFromBottomAndFade",
    // ease: "easeInOut",
    // mass: 0.4,
    // damping: 8,
  }
  
  const swipeInFromBottomAndFade = {
    initial: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition },
    hidden: { y: -100, opacity: 0, transition }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  
  return (
    <motion.div
      ref={ref}
      variants={swipeInFromBottomAndFade}
      animate={controls}
      initial="initial"
    >
      { children }
    </motion.div>
  )
}
