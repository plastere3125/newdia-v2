'use client'

import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Brand Identity',
    sub: 'CI · BI · 로고 · 가이드라인',
    description: '보이는 것을 만드는 것이 아니라, 기억되는 구조를 만듭니다.',
  },
  {
    num: '02',
    title: 'Web Design',
    sub: 'UX/UI · 반응형 · 개발',
    description: '웹사이트가 아니라 브랜드 경험을 구축합니다.',
  },
  {
    num: '03',
    title: 'Photography',
    sub: '제품 · 인물 · 공간',
    description: '제품이 아니라 맥락을 촬영합니다.',
  },
  {
    num: '04',
    title: 'Marketing',
    sub: 'SNS · 콘텐츠 · 캠페인',
    description: '노출이 아니라 관계를 설계합니다.',
  },
]

export default function Services() {
  return (
    <section id="services" className="nd-section" style={{ background: 'var(--black)' }}>
      <div className="nd-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 96, alignItems: 'start' }}>

          {/* Left sticky */}
          <div style={{ position: 'sticky', top: 100 }}>
            <span className="nd-label" style={{ marginBottom: 20 }}>Services</span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.045em',
              lineHeight: 1.0,
              color: 'var(--white)',
              marginBottom: 28,
            }}>
              무엇을<br />
              <span style={{ color: 'var(--lime)' }}>만드는가.</span>
            </h2>
            <div style={{ width: 32, height: 2, background: 'var(--lime)' }} />
          </div>

          {/* Right: service list */}
          <div>
            {services.map((svc, i) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: 32,
                  padding: '44px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--lime)', letterSpacing: '0.1em', paddingTop: 2 }}>
                  {svc.num}
                </span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--white)' }}>
                      {svc.title}
                    </h3>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {svc.sub}
                    </span>
                  </div>
                  <p style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}>
                    {svc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
