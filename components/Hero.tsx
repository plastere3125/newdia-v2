'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const stats = [
  { num: '10+', label: 'Years' },
  { num: '200+', label: 'Projects' },
  { num: '50+', label: 'Clients' },
]

const disciplines = ['Brand Identity', 'Web Design', 'Photography', 'Marketing']

export default function Hero() {
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const smoothX = useSpring(mouseX, { stiffness: 32, damping: 14 })
  const smoothY = useSpring(mouseY, { stiffness: 32, damping: 14 })

  // 3 depth layers: geo(back) / text(mid) / lime(front-counter)
  const geoX  = useTransform(smoothX, [0, 1], [-24, 24])
  const geoY  = useTransform(smoothY, [0, 1], [-14, 14])
  const textX = useTransform(smoothX, [0, 1], [10, -10])
  const textY = useTransform(smoothY, [0, 1], [6, -6])
  const limeX = useTransform(smoothX, [0, 1], [18, -18])
  const limeY = useTransform(smoothY, [0, 1], [11, -11])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - r.left) / r.width)
    mouseY.set((e.clientY - r.top) / r.height)
  }
  const handleMouseLeave = () => { mouseX.set(0.5); mouseY.set(0.5) }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0f1011',
        paddingTop: 'var(--header-h)',
        cursor: 'default',
      }}
    >
      {/* ── Logo-derived geometric composition (right side) ── */}
      <motion.div
        style={{
          position: 'absolute', right: 0, top: 0,
          width: '48%', height: '100%',
          pointerEvents: 'none',
          x: geoX, y: geoY,
        }}
      >
        {/* Vertical arm — dark slab */}
        <motion.div
          initial={{ scaleY: 0, transformOrigin: 'top' }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute', right: 0, top: 0,
            width: '38%', height: '68%',
            background: '#1c1f22',
          }}
        />
        {/* Horizontal arm — dark slab (forms L with vertical) */}
        <motion.div
          initial={{ scaleX: 0, transformOrigin: 'right' }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute', right: 0, top: '52%',
            width: '100%', height: '18%',
            background: '#1c1f22',
          }}
        />

        {/* Lime accent square — logo's top-right motif */}
        <motion.div
          initial={{ scale: 0, transformOrigin: 'top right' }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.55, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute', right: 0, top: 0,
            width: '38%', height: '22%',
            background: '#cbdb2a',
            x: limeX, y: limeY,
          }}
        />

        {/* Subtle grid inside the dark slabs */}
        <div style={{
          position: 'absolute', right: 0, top: 0,
          width: '38%', height: '68%',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}/>
      </motion.div>

      {/* ── Main text content (left) ── */}
      <div className="nd-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <motion.div
          style={{ maxWidth: '54%', x: textX, y: textY }}
        >
          {/* Idea → Frame → Impact flow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 44 }}
          >
            {['Idea', 'Frame', 'Impact'].map((word, i) => (
              <div key={word} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.12 }}
                  style={{
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: i === 2 ? '#cbdb2a' : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {word}
                </motion.span>
                {i < 2 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 + i * 0.12 }}
                    style={{ color: 'rgba(255,255,255,0.15)', fontSize: 11 }}
                  >
                    →
                  </motion.span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(48px, 8vw, 124px)',
              fontWeight: 800,
              letterSpacing: '-0.055em',
              lineHeight: 0.9,
              color: '#f5f4f0',
              marginBottom: 56,
            }}
          >
            Framing<br />
            Ideas into<br />
            <motion.span
              initial={{ opacity: 0, scale: 1.16, display: 'inline-block' }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: '#cbdb2a', display: 'inline-block', transformOrigin: 'left center' }}
            >
              Impact.
            </motion.span>
          </motion.h1>

          {/* Discipline strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{
              display: 'flex',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              marginBottom: 48,
            }}
          >
            {disciplines.map((d, i) => (
              <div key={d} style={{
                flex: 1,
                padding: '14px 0',
                paddingLeft: i > 0 ? 16 : 0,
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                fontSize: 10, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.32)',
              }}>
                {d}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{ display: 'flex', gap: 12 }}
          >
            <a
              href="#work"
              onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                padding: '15px 36px',
                background: '#cbdb2a',
                color: '#0f1011',
                fontSize: 12, fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                transition: 'filter 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.08)')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
            >
              Work →
            </a>
            <a
              href="/consultation"
              style={{
                padding: '14px 36px',
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: 12, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            >
              무료 상담
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats — bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: 'absolute', bottom: 48, left: 32,
          display: 'flex', gap: 48,
          zIndex: 2,
        }}
      >
        {stats.map(s => (
          <div key={s.label}>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em', color: '#f5f4f0' }}>
              {s.num}
            </div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
      >
        <motion.div
          animate={{ scaleY: [1, 0.35, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          style={{ width: 1, height: 52, background: 'rgba(255,255,255,0.15)', transformOrigin: 'bottom' }}
        />
      </motion.div>
    </section>
  )
}
