import React from 'react'
import { motion } from 'framer-motion'
import './ScrollIndicator.css'

const ScrollIndicator = () => {
    return (
        <div className="scroll-indicator">
            <motion.div
                className="scroll-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p>Scroll down to continue the story 💕</p>
            </motion.div>
            <motion.div
                className="scroll-arrow"
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                ↓
            </motion.div>
        </div>
    )
}

export default ScrollIndicator
