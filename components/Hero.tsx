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
        opacity: 0.5,
      }} />

      {/* Lime right accent line — desktop only */}
      <motion.div
        initial={{ scaleY: 0, transformOrigin: 'top' }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="nd-hero-line"
        style={{
          position: 'absolute',
          top: 0, right: 96,
          width: 2, height: '100%',
          background: 'var(--lime)',
        }}
      />

      {/* Stat column — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="nd-hero-stats"
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
      <div className="nd-container nd-hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 800 }}>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(80px, 13vw, 200px)',
              fontWeight: 800,
              letterSpacing: '-0.06em',
              lineHeight: 0.88,
              color: 'var(--black)',
              marginBottom: 64,
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
            transition={{ duration: 0.5, delay: 1.0 }}
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
