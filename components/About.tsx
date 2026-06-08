'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '10+', label: 'Years' },
  { num: '200+', label: 'Projects' },
  { num: '50+', label: 'Clients' },
]

export default function About() {
  return (
    <section id="about" className="nd-section" style={{ background: 'var(--white)' }}>
      <div className="nd-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              marginBottom: 40,
              color: 'var(--black)',
            }}>
              브랜드가<br />
              <span style={{ color: 'var(--gray-400)' }}>기억되는</span><br />
              방식.
            </h2>

            <div style={{
              borderTop: '1px solid var(--gray-200)',
              paddingTop: 32,
              display: 'flex',
              gap: 48,
            }}>
              {stats.map((stat, i) => (
                <div key={stat.label} style={{ borderLeft: i === 0 ? 'none' : '1px solid var(--gray-200)', paddingLeft: i === 0 ? 0 : 24 }}>
                  <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.04em', color: 'var(--black)', lineHeight: 1 }}>
                    {stat.num}
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-400)', marginTop: 6 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: pure visual grid — 4 blocks, no methodology labels */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {/* Brand Identity */}
              <div style={{
                background: 'var(--black)',
                aspectRatio: '1',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 10 }}>
                  Brand Identity
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                  CI · BI · 로고 · 가이드라인
                </div>
              </div>

              {/* Web Design */}
              <div style={{
                background: 'var(--lime)',
                aspectRatio: '1',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', marginBottom: 10 }}>
                  Web Design
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--black)', lineHeight: 1.4 }}>
                  UX · UI · 반응형 · 개발
                </div>
              </div>

              {/* Photography */}
              <div style={{
                background: 'var(--gray-100)',
                aspectRatio: '1',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 10 }}>
                  Photography
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--black)', lineHeight: 1.4 }}>
                  제품 · 인물 · 공간 · 브랜드
                </div>
              </div>

              {/* Marketing */}
              <div style={{
                background: 'var(--gray-200)',
                aspectRatio: '1',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray-600)', marginBottom: 10 }}>
                  Marketing
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--black)', lineHeight: 1.4 }}>
                  SNS · 콘텐츠 · 캠페인
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
