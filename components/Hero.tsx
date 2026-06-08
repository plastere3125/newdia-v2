'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '10+', label: 'Years' },
  { num: '200+', label: 'Projects' },
  { num: '50+', label: 'Clients' },
]

const disciplines = ['Brand Identity', 'Web Design', 'Photography', 'Marketing']

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 720,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: 'var(--white)',
        paddingBottom: 0,
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--gray-200) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        opacity: 0.5,
      }} />

      {/* Lime right column accent */}
      <motion.div
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          right: 96,
          width: 2,
          height: '100%',
          background: 'var(--lime)',
        }}
      />

      {/* Stat column — right of lime line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          width: 96,
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 36,
        }}
      >
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--black)' }}>
              {s.num}
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray-400)', marginTop: 5 }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="nd-container" style={{ position: 'relative', zIndex: 1, paddingBottom: 0 }}>
        <div style={{ maxWidth: 800 }}>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(64px, 10vw, 128px)',
              fontWeight: 800,
              letterSpacing: '-0.055em',
              lineHeight: 0.92,
              color: 'var(--black)',
              marginBottom: 48,
            }}
          >
            브랜드를<br />
            <span style={{ color: 'var(--lime)' }}>결정합니다.</span>
          </motion.h1>

          {/* Discipline strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              borderTop: '1px solid var(--gray-200)',
              borderBottom: '1px solid var(--gray-200)',
              marginBottom: 48,
            }}
          >
            {disciplines.map((d, i) => (
              <div
                key={d}
                style={{
                  flex: 1,
                  padding: '14px 0',
                  paddingLeft: i > 0 ? 20 : 0,
                  borderLeft: i > 0 ? '1px solid var(--gray-200)' : 'none',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-600)',
                }}
              >
                {d}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{ display: 'flex', gap: 12, paddingBottom: 64 }}
          >
            <a
              href="#work"
              className="nd-btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Work <span style={{ fontSize: 15 }}>→</span>
            </a>
            <a href="/consultation" className="nd-btn-outline">
              무료 상담
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ width: 1, height: 48, background: 'var(--gray-400)', transformOrigin: 'bottom' }}
        />
      </motion.div>
    </section>
  )
}
