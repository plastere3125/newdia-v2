'use client'

import { motion } from 'framer-motion'

const packages = [
  {
    name: 'Starter',
    subtitle: '스타트업 · 소규모 비즈니스',
    description: '브랜드의 첫 발자국. 필수 디자인 자산을 빠르게 완성합니다.',
    features: ['로고 디자인', '명함 · 기본 문구류', 'SNS 프로필 키트'],
    highlight: false,
  },
  {
    name: 'Growth',
    subtitle: '성장 중인 기업',
    description: '브랜드를 확장할 준비가 된 기업을 위한 종합 솔루션.',
    features: ['브랜드 아이덴티티 시스템', '웹사이트 디자인 · 개발', '마케팅 콘텐츠 제작', 'SNS 운영 가이드'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    subtitle: '대기업 · 프랜차이즈',
    description: '리뉴얼과 통합 관리가 필요한 브랜드를 위한 전담 서비스.',
    features: ['브랜드 리뉴얼 전략', '멀티 채널 디자인', '브랜드 가이드라인', '전담 디자인 팀'],
    highlight: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="nd-section" style={{ background: 'var(--gray-50)' }}>
      <div className="nd-container">

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <span className="nd-label" style={{ marginBottom: 16 }}>Service Packages</span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: 'var(--black)',
          }}>
            맞춤형 패키지
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: pkg.highlight ? 'var(--black)' : 'var(--white)',
                padding: '52px 44px',
                position: 'relative',
                border: pkg.highlight ? 'none' : '1px solid var(--gray-200)',
              }}
            >
              {pkg.highlight && (
                <div style={{
                  position: 'absolute', top: 24, right: 24,
                  padding: '4px 12px',
                  background: 'var(--lime)',
                  color: 'var(--black)',
                  fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase',
                }}>
                  Recommended
                </div>
              )}

              <div style={{ marginBottom: 32 }}>
                <h3 style={{
                  fontSize: 30,
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  color: pkg.highlight ? 'var(--white)' : 'var(--black)',
                  marginBottom: 6,
                }}>
                  {pkg.name}
                </h3>
                <p style={{
                  fontSize: 11, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: pkg.highlight ? 'rgba(255,255,255,0.35)' : 'var(--gray-400)',
                }}>
                  {pkg.subtitle}
                </p>
              </div>

              <p style={{
                fontSize: 14, lineHeight: 1.75,
                color: pkg.highlight ? 'rgba(255,255,255,0.55)' : 'var(--gray-600)',
                marginBottom: 32,
              }}>
                {pkg.description}
              </p>

              <ul style={{ marginBottom: 44 }}>
                {pkg.features.map(f => (
                  <li
                    key={f}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '11px 0',
                      borderTop: pkg.highlight ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--gray-100)',
                      fontSize: 14,
                      color: pkg.highlight ? 'rgba(255,255,255,0.8)' : 'var(--gray-800)',
                    }}
                  >
                    <span style={{ color: 'var(--lime)', fontSize: 14, flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`/consultation?type=package`}
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '15px 0',
                  background: pkg.highlight ? 'var(--lime)' : 'transparent',
                  border: pkg.highlight ? 'none' : '1px solid var(--black)',
                  color: 'var(--black)',
                  fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  if (!pkg.highlight) {
                    e.currentTarget.style.background = 'var(--black)'
                    e.currentTarget.style.color = 'var(--white)'
                  } else {
                    e.currentTarget.style.filter = 'brightness(1.07)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = pkg.highlight ? 'var(--lime)' : 'transparent'
                  e.currentTarget.style.color = 'var(--black)'
                  e.currentTarget.style.filter = 'none'
                }}
              >
                상담 신청
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
