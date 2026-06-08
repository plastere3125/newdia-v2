'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const stats = [
  { num: '10+', label: 'Years' },
  { num: '200+', label: 'Projects' },
  { num: '50+', label: 'Clients' },
]

const disciplines = ['Brand Identity', 'Web Design', 'Photography', 'Marketing']

const corners = [
  { top: -20, left: -20, borderTop: '2px solid var(--lime)', borderLeft: '2px solid var(--lime)' },
  { top: -20, right: -20, borderTop: '2px solid var(--lime)', borderRight: '2px solid var(--lime)' },
  { bottom: -20, left: -20, borderBottom: '2px solid var(--lime)', borderLeft: '2px solid var(--lime)' },
  { bottom: -20, right: -20, borderBottom: '2px solid var(--lime)', borderRight: '2px solid var(--lime)' },
] as const

export default function Hero() {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 16 })
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 16 })

  // Headline moves opposite to cursor (foreground layer)
  const headX = useTransform(smoothX, [0, 1], [16, -16])
  const headY = useTransform(smoothY, [0, 1], [10, -10])
  // Grid drifts with cursor (background layer)
  const gridX = useTransform(smoothX, [0, 1], [-10, 10])
  const gridY = useTransform(smoothY, [0, 1], [-6, 6])
  // Corners counter-drift (mid layer)
  const cornerX = useTransform(smoothX, [0, 1], [8, -8])
  const cornerY = useTransform(smoothY, [0, 1], [5, -5])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
        cursor: 'default',
      }}
    >
      {/* Grid background — parallax layer (back) */}
      <motion.div
        style={{
          position: 'absolute',
          inset: -24,
          x: gridX,
          y: gridY,
          backgroundImage: 'linear-gradient(var(--gray-200) 1px, transparent 1px), linear-gradient(90deg, var(--gray-200) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.45,
        }}
      />

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

          {/* Headline + viewfinder corners — parallax layer (front) */}
          <motion.div style={{ position: 'relative', width: 'fit-content', marginBottom: 56, x: headX, y: headY }}>

            {/* Viewfinder corners */}
            {corners.map((corner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute' as const,
                  width: 22,
                  height: 22,
                  x: cornerX,
                  y: cornerY,
                  ...corner,
                }}
              />
            ))}

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
                padding: '16px 0 8px',
              }}
            >
              Framing<br />
              Ideas into<br />
              <motion.span
                initial={{ opacity: 0, scale: 1.18, display: 'inline-block' }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
                style={{ color: 'var(--lime)', display: 'inline-block', transformOrigin: 'left center' }}
              >
                Impact.
              </motion.span>
            </motion.h1>
          </motion.div>

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
