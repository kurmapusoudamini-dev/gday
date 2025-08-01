import React from 'react'
import { motion } from 'framer-motion'
import './Hearts.css'

const Hearts = () => {
    const hearts = ['💕', '💖', '💗', '💝', '💞', '💓', '🌸', '🌺']

    return (
        <div className="hearts-container">
            {Array.from({ length: 15 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="floating-heart"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${6 + Math.random() * 4}s`
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: Math.random() * 2 }}
                >
                    {hearts[Math.floor(Math.random() * hearts.length)]}
                </motion.div>
            ))}
        </div>
    )
}

export default Hearts
