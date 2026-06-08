'use client'

import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Brand Identity',
    description: 'CI/BI 시스템 설계부터 브랜드 가이드라인까지. 브랜드의 첫 인상을 완성합니다.',
    href: '#portfolio',
  },
  {
    num: '02',
    title: 'Web Design',
    description: '브랜드 경험을 디지털로 확장합니다. 시스템 기반 반응형 웹사이트.',
    href: '#portfolio',
  },
  {
    num: '03',
    title: 'Photography',
    description: '제품, 인물, 공간. 브랜드 스토리를 이미지로 완성합니다.',
    href: '#portfolio',
  },
  {
    num: '04',
    title: 'Marketing',
    description: 'SNS 콘텐츠부터 캠페인 전략까지. 브랜드 일관성을 유지합니다.',
    href: '#portfolio',
  },
]

export default function Services() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="nd-section" style={{ background: 'var(--black)' }}>
      <div className="nd-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>

          {/* Left sticky */}
          <div style={{ position: 'sticky', top: 120 }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--white)',
              marginBottom: 32,
            }}>
              무엇을<br />
              <span style={{ color: 'var(--lime)' }}>만드는가.</span>
            </h2>
            <div style={{
              width: 40,
              height: 2,
              background: 'var(--lime)',
            }} />
          </div>

          {/* Right: service list */}
          <div>
            {services.map((svc, i) => (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  display: 'flex',
                  gap: 32,
                  padding: '40px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'padding-left 0.25s ease',
                }}
                onClick={() => scrollTo(svc.href)}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = '16px')}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = '0')}
              >
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--lime)',
                  letterSpacing: '0.1em',
                  paddingTop: 4,
                  flexShrink: 0,
                }}>
                  {svc.num}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 24,
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    color: 'var(--white)',
                    marginBottom: 10,
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.4)',
                  }}>
                    {svc.description}
                  </p>
                </div>
                <span style={{
                  color: 'rgba(255,255,255,0.2)',
                  fontSize: 20,
                  alignSelf: 'center',
                  flexShrink: 0,
                }}>
                  →
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
