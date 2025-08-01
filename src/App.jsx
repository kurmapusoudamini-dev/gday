import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './App.css'
import Rose from './components/Rose'
import Message from './components/Message'
import Letter from './components/Letter'
import Hearts from './components/Hearts'
import ScrollIndicator from './components/ScrollIndicator'

function App() {
  const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.3, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.3, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.3, triggerOnce: true })

  // Auto scroll effect after initial load
  useEffect(() => {
    const autoScroll = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: 'smooth'
      })
    }, 3000) // Start auto scroll after 3 seconds

    return () => clearTimeout(autoScroll)
  }, [])

  return (
    <div className="app">
      <Hearts />

      {/* Opening Section */}
      <section className="section opening">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="greeting"
        >
          <h1>Hello Beautiful Aparanjitha 💕</h1>
          <p>I have something special to tell you...</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <ScrollIndicator />
          </motion.div>
        </motion.div>
      </section>

      {/* Apology Section */}
      <section className="section" ref={ref1}>
        <Message
          inView={inView1}
          text="I know I'm sometimes late with special days..."
          delay={0.2}
        />
      </section>

      {/* Rose Blooming Section */}
      <section className="section rose-section" ref={ref2}>
        <Rose inView={inView2} />
        <Message
          inView={inView2}
          text="But my feelings for you are always blooming 🌹"
          delay={1.5}
        />
      </section>

      {/* Confession Section */}
      <section className="section" ref={ref3}>
        <Message
          inView={inView3}
          text="In every heartbeat, every breath, every moment... you are my eternal dream ✨"
          delay={0.3}
        />
      </section>

      {/* Promise Section */}
      <section className="section" ref={ref4}>
        <Message
          inView={inView4}
          text="I promise to always try my best to treat you like the queen you are 👑"
          delay={0.4}
        />
      </section>

      {/* Final Letter Section */}
      <section className="section letter-section" ref={ref5}>
        <motion.div
          className="letter-instruction"
          initial={{ opacity: 0, y: 30 }}
          animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>✨ Wait for the magic to happen ✨</p>
          <p>A special letter is being prepared for you...</p>
        </motion.div>
        <Letter inView={inView5} />
      </section>
    </div>
  )
}

export default App