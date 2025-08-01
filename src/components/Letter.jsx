import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Letter.css'

const Letter = ({ inView }) => {
    const [isOpen, setIsOpen] = useState(false)

    const envelopeVariants = {
        closed: { rotateX: 0 },
        open: { rotateX: -180, transition: { duration: 1.5, delay: 1 } }
    }

    const letterVariants = {
        hidden: { y: 100, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, delay: 2.5, type: "spring", stiffness: 100 }
        }
    }

    const messageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 3.5 + i * 0.3 }
        })
    }

    React.useEffect(() => {
        if (inView) {
            setTimeout(() => setIsOpen(true), 1000)
        }
    }, [inView])

    const messages = [
        "Happy Girlfriend's Day, my queen! 👑",
        "You deserve all the love in the world 💕",
        "Thank you for being patient with me 🥺",
        "I love you more than words can say ❤️"
    ]

    return (
        <div className="letter-container">
            <motion.div
                className="envelope"
                initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                animate={inView ? { scale: 1, opacity: 1, rotateY: 0 } : { scale: 0, opacity: 0, rotateY: -90 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
            >
                <motion.div
                    className="envelope-flap"
                    variants={envelopeVariants}
                    animate={isOpen ? "open" : "closed"}
                />
                <div className="envelope-body">
                    <div className="envelope-seal">💌</div>
                </div>
            </motion.div>

            <motion.div
                className="letter-paper"
                variants={letterVariants}
                initial="hidden"
                animate={inView && isOpen ? "visible" : "hidden"}
            >
                <div className="letter-header">
                    <motion.div
                        className="crown"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={inView && isOpen ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                        transition={{ duration: 1, delay: 4 }}
                    >
                        👑
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={inView && isOpen ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 4.2 }}
                    >
                        To My Beloved Aparanjitha
                    </motion.h2>
                </div>

                <div className="letter-content">
                    {messages.map((message, i) => (
                        <motion.p
                            key={i}
                            className="letter-message"
                            variants={messageVariants}
                            custom={i}
                            initial="hidden"
                            animate={inView && isOpen ? "visible" : "hidden"}
                        >
                            {message}
                        </motion.p>
                    ))}

                    <motion.div
                        className="signature"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView && isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, delay: 6 }}
                    >
                        <p>Forever yours,</p>
                        <p className="signature-name">Your loving boyfriend 💕</p>
                    </motion.div>
                </div>

                {/* Decorative hearts around the letter */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={`letter-heart-${i}`}
                        className="letter-heart"
                        style={{
                            top: `${10 + Math.random() * 80}%`,
                            left: `${5 + Math.random() * 90}%`,
                        }}
                        initial={{ scale: 0, opacity: 0, rotate: 0 }}
                        animate={inView && isOpen ? {
                            scale: [0, 1.2, 1],
                            opacity: [0, 0.8, 0.6],
                            rotate: 360
                        } : { scale: 0, opacity: 0, rotate: 0 }}
                        transition={{
                            duration: 2,
                            delay: 5 + i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 4
                        }}
                    >
                        💖
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Letter
