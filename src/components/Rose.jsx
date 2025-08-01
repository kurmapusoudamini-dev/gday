import React from 'react'
import { motion } from 'framer-motion'
import './Rose.css'

const Rose = ({ inView }) => {
    const petalVariants = {
        closed: { scale: 0, rotate: 0, opacity: 0 },
        blooming: (i) => ({
            scale: 1,
            rotate: i * 30,
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        })
    }

    const stemVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: "150px",
            opacity: 1,
            transition: { duration: 1, delay: 0.5 }
        }
    }

    return (
        <div className="rose-container">
            <motion.div
                className="rose"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {/* Rose Petals */}
                <div className="rose-center">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className={`petal petal-${i + 1}`}
                            variants={petalVariants}
                            custom={i}
                            initial="closed"
                            animate={inView ? "blooming" : "closed"}
                        />
                    ))}

                    {/* Inner petals */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={`inner-${i}`}
                            className={`petal inner-petal petal-${i + 1}`}
                            variants={petalVariants}
                            custom={i + 3}
                            initial="closed"
                            animate={inView ? "blooming" : "closed"}
                        />
                    ))}

                    {/* Rose center */}
                    <motion.div
                        className="rose-heart"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    />
                </div>

                {/* Stem */}
                <motion.div
                    className="stem"
                    variants={stemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                />

                {/* Leaves */}
                <motion.div
                    className="leaf left-leaf"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={inView ? { scale: 1, rotate: -25 } : { scale: 0, rotate: -45 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                />
                <motion.div
                    className="leaf right-leaf"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={inView ? { scale: 1, rotate: 25 } : { scale: 0, rotate: 45 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                />
            </motion.div>

            {/* Sparkles around the rose */}
            {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                    key={`sparkle-${i}`}
                    className="sparkle"
                    style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? {
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: 360
                    } : { scale: 0, opacity: 0 }}
                    transition={{
                        duration: 2,
                        delay: 2 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3
                    }}
                >
                    ✨
                </motion.div>
            ))}
        </div>
    )
}

export default Rose
