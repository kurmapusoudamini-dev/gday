import React from 'react'
import { motion } from 'framer-motion'
import './Message.css'

const Message = ({ inView, text, delay = 0 }) => {
    return (
        <motion.div
            className="message"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
            transition={{
                duration: 1.2,
                delay: delay,
                type: "spring",
                stiffness: 120,
                damping: 12
            }}
        >
            <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: delay + 0.3 }}
            >
                {text}
            </motion.p>
            <motion.div
                className="message-decoration"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: delay + 0.6 }}
            />
        </motion.div>
    )
}

export default Message
