'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section style={{
      padding: '160px 0',
      background: 'var(--white)',
      borderBottom: '1px solid var(--gray-200)',
    }}>
      <div className="nd-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: 96,
          alignItems: 'start',
        }}>

          {/* Left */}
          <div style={{ paddingTop: 8 }}>
            <span className="nd-label" style={{ marginBottom: 20 }}>Frame Theory</span>
            <div style={{ width: 24, height: 2, background: 'var(--lime)', marginTop: 16 }} />

            {/* Idea → Frame → Impact — vertical */}
            <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {['Idea', 'Frame', 'Impact'].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                >
                  <div style={{
                    fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: i === 1 ? 'var(--lime)' : 'var(--gray-400)',
                    padding: '10px 0',
                    borderLeft: i === 1 ? '2px solid var(--lime)' : '2px solid var(--gray-200)',
                    paddingLeft: 12,
                  }}>
                    {word}
                  </div>
                  {i < 2 && (
                    <div style={{
                      width: 1, height: 16,
                      background: 'var(--gray-200)',
                      marginLeft: 12,
                    }} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontSize: 'clamp(26px, 3vw, 44px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.25,
              color: 'var(--black)',
              marginBottom: 40,
            }}>
              아이디어는 결과가 아닙니다.<br /><br />
              아이디어는 프레임을 만날 때<br />
              비로소 브랜드가 됩니다.
            </p>
            <div style={{
              width: 40, height: 1,
              background: 'var(--gray-200)',
              marginBottom: 32,
            }} />
            <p style={{
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.85,
              color: 'var(--gray-600)',
            }}>
              NEWDIA는 디자인, 웹, 콘텐츠, 마케팅을<br />
              하나의 프레임 안에서 연결하여<br />
              실질적인 임팩트로 전환합니다.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
