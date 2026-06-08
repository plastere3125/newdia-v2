'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToPortfolio = () => {
    const el = document.querySelector('#portfolio')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 700,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--white)',
      }}
    >
      {/* Architectural grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(var(--gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--gray-200) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.55,
        }}
      />

      {/* Lime vertical line */}
      <motion.div
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          right: 80,
          width: 2,
          height: '100%',
          background: 'var(--lime)',
        }}
      />

      {/* Right-side stat column */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          width: 80,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
        }}
      >
        {[
          { num: '10+', label: 'YRS' },
          { num: '200+', label: 'PRJ' },
          { num: '50+', label: 'CLT' },
        ].map(stat => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--black)', lineHeight: 1 }}>
              {stat.num}
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', color: 'var(--gray-400)', marginTop: 4 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="nd-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 680 }}>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(52px, 8vw, 100px)',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 0.95,
              color: 'var(--black)',
              marginBottom: 48,
            }}
          >
            브랜드를<br />
            <span style={{ color: 'var(--lime)' }}>결정짓는</span><br />
            디자인.
          </motion.h1>

          {/* Discipline row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: 0,
              marginBottom: 48,
              borderTop: '1px solid var(--gray-200)',
              borderBottom: '1px solid var(--gray-200)',
            }}
          >
            {['Brand Identity', 'Web Design', 'Photography', 'Marketing'].map((d, i) => (
              <div
                key={d}
                style={{
                  flex: 1,
                  padding: '12px 0',
                  borderRight: i < 3 ? '1px solid var(--gray-200)' : 'none',
                  paddingLeft: i > 0 ? 16 : 0,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-600)',
                }}
              >
                {d}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
            <button className="nd-btn-primary" onClick={scrollToPortfolio}>
              Work
              <span style={{ fontSize: 16 }}>→</span>
            </button>
            <a href="/consultation" className="nd-btn-outline">
              문의하기
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.5 }}
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gray-400)',
              marginTop: 32,
            }}
          >
            NEW<span style={{ color: 'var(--lime)' }}>DIA</span> — A NEW ID
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={{ width: 1, height: 40, background: 'var(--gray-400)' }}
        />
      </motion.div>
    </section>
  )
}
