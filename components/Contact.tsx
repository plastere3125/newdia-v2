'use client'

import { motion } from 'framer-motion'
import { siteData } from '@/data/portfolio'

export default function Contact() {
  const { contact } = siteData

  return (
    <>
      {/* CTA — lime band */}
      <section style={{ background: 'var(--lime)', padding: '96px 0' }}>
        <div className="nd-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 48 }}
          >
            <div>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 800,
                letterSpacing: '-0.045em',
                lineHeight: 1.0,
                color: 'var(--black)',
                marginBottom: 16,
              }}>
                Let's Work<br />Together.
              </h2>
              <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.55)', lineHeight: 1.6 }}>
                무료 상담을 통해 귀사에 맞는 최적의 솔루션을 제안해 드립니다.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
              <a
                href="/consultation"
                style={{
                  padding: '18px 44px',
                  background: 'var(--black)',
                  color: 'var(--white)',
                  fontSize: 12, fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  transition: 'background 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--black)')}
              >
                무료 상담 신청
              </a>
              <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.05em' }}>
                영업일 기준 24시간 내 답변
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact info — dark */}
      <section id="contact" className="nd-section" style={{ background: 'var(--black)' }}>
        <div className="nd-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="nd-label" style={{ marginBottom: 20 }}>Contact</span>
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 60px)',
                fontWeight: 800,
                letterSpacing: '-0.045em',
                lineHeight: 1.0,
                color: 'var(--white)',
                marginBottom: 40,
              }}>
                {contact.title}
              </h2>
              <a
                href="/consultation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '18px 44px',
                  background: 'var(--lime)',
                  color: 'var(--black)',
                  fontSize: 12, fontWeight: 800,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  transition: 'filter 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
              >
                GET IN TOUCH →
              </a>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ paddingTop: 8 }}
            >
              {[
                { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
                { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
                { label: 'Location', value: contact.address },
              ].map(item => (
                <div key={item.label} style={{ padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 10 }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>{item.value}</span>
                  )}
                </div>
              ))}

              <div style={{ display: 'flex', gap: 28, paddingTop: 32 }}>
                {siteData.social.map(s => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
