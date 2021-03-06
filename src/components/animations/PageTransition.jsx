import { motion } from 'framer-motion'

const transition = {
	// duration: 0.5,
	// ease: "easeInOut",
	type: "spring",
	mass: 0.4,
	damping: 8,
}

const fadeIn = {
	initial: { opacity: 0 },
	enter: { opacity: 1, transition },
	exit: { opacity: 0, transition }
}

const swipeInFromLeftAndFade = {
	initial: { x: -100, opacity: 0 },
	enter: { x: 0, opacity: 1, transition },
	exit: { x: 100, opacity: 0, transition }
}

const swipeInFromRightAndFade = {
	initial: { x: 100, opacity: 0 },
	enter: { x: 0, opacity: 1, transition },
	exit: { x: -100, opacity: 0, transition }
}

const swipeInFromTopAndFade = {
	initial: { y: -100, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: 100, opacity: 0, transition }
}

const swipeInFromBottomAndFade = {
	initial: { y: 100, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: { y: -100, opacity: 0, transition }
}

const spring = {
	initial: {
		opacity: 0,
		x: "-50vw",
		transition: {
			// staggerChildren: 0.5,
		}
	},
	enter: {
		opacity: 1,
		x: 0,
		transition: {
			...transition,
		}
	},
	exit: {
		opacity: 0,
		x: "-50vw",
		transition: {
			...transition,
			mass: 0.01,
			// staggerChildren: 0.5,
		}
	},
}

const PageTransition = ({ children }) => {
	return (
		<motion.div
			variants={fadeIn}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			{children}
		</motion.div>
	)
}

export default PageTransition
