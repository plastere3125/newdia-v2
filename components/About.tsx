'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section style={{
      padding: '160px 0',
      background: 'var(--white)',
      borderTop: '1px solid var(--gray-200)',
      borderBottom: '1px solid var(--gray-200)',
    }}>
      <div className="nd-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr',
          gap: 80,
          alignItems: 'start',
        }}>
          <div style={{ paddingTop: 6 }}>
            <div style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gray-400)',
              lineHeight: 1.8,
            }}>
              NEWDIA<br />2014 —
            </div>
            <div style={{ width: 24, height: 2, background: 'var(--lime)', marginTop: 16 }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 1.25,
              color: 'var(--black)',
              marginBottom: 40,
            }}>
              브랜드는 로고가 아닙니다.<br />
              브랜드는 경험입니다.
            </p>
            <p style={{
              fontSize: 'clamp(15px, 1.6vw, 20px)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.75,
              color: 'var(--gray-600)',
            }}>
              우리는 디자인을 만드는 것이 아니라,<br />
              브랜드가 작동하는 방식을 설계합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
