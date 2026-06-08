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
        minHeight: 760,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--white)',
        paddingTop: 'var(--header-h)',
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--gray-200) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        opacity: 0.45,
      }} />

      {/* Stat column — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="nd-hero-stats"
        style={{
          position: 'absolute',
          top: '50%',
          right: 48,
          width: 80,
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
        }}
      >
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--black)' }}>
              {s.num}
            </div>
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray-400)', marginTop: 5 }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="nd-container nd-hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1000 }}>

          {/* Studio label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--gray-400)',
              marginBottom: 40,
            }}
          >
            Brand Design Studio — Seoul
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(56px, 9.5vw, 148px)',
              fontWeight: 800,
              letterSpacing: '-0.055em',
              lineHeight: 0.9,
              color: 'var(--black)',
              marginBottom: 56,
            }}
          >
            Framing<br />
            Ideas into<br />
            <span style={{ color: 'var(--lime)' }}>Impact.</span>
          </motion.h1>

          {/* Discipline strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
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
                  paddingLeft: i > 0 ? 16 : 0,
                  borderLeft: i > 0 ? '1px solid var(--gray-200)' : 'none',
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-600)',
                }}
              >
                {d}
              </div>
            ))}
          </motion.div>

          {/* Mobile stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="nd-hero-stats-mobile"
            style={{ display: 'none', gap: 32, marginBottom: 40 }}
          >
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--black)' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gray-400)', marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            style={{ display: 'flex', gap: 12 }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
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
