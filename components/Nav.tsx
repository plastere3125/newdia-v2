'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

// Inline logomark — adapts between dark hero and light sections
function LogoMark({ dark }: { dark: boolean }) {
  const fg = dark ? '#f5f4f0' : '#373d41'
  return (
    <a
      href="#"
      onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
    >
      <svg width="22" height="21" viewBox="0 0 107 102" fill="none">
        <rect x="71.85" width="34.23" height="34.23" fill="#cbdb2a"/>
        <polygon points="14.8,17.34 59.44,17.34 59.44,2.54 0,2.54 0,59.32 14.8,59.32" fill={fg}/>
        <path d="M88.92,87.01v-40.77h14.8v48.54c0,3.88-3.15,7.03-7.03,7.03h-53.91v-14.8h46.14Z" fill={fg}/>
        <path d="M31.89,85.6c-8.66,0-15.68-7.02-15.68-15.68H0v.7c0,17.42,14.12,31.54,31.54,31.54h.99v-15.86h-.29c-.19,0-.35-.16-.35-.35z" fill={fg}/>
      </svg>
      <span style={{
        fontSize: 15,
        fontWeight: 800,
        letterSpacing: '-0.03em',
        color: dark ? '#f5f4f0' : '#0f1011',
        transition: 'color 0.3s ease',
      }}>
        NEWDIA
      </span>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = !scrolled
  const linkColor = dark ? 'rgba(255,255,255,0.45)' : 'var(--gray-600)'
  const linkHover = dark ? '#fff' : 'var(--black)'

  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      height: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--gray-200)' : '1px solid rgba(255,255,255,0.06)',
      transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
    }}>
      <div className="nd-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

        <LogoMark dark={dark} />

        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              style={{
                fontSize: 12, fontWeight: 500,
                color: linkColor,
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              {item.label}
            </button>
          ))}

          <a
            href="/consultation"
            style={{
              padding: '9px 22px',
              background: dark ? 'transparent' : '#0f1011',
              border: dark ? '1px solid rgba(255,255,255,0.22)' : '1px solid #0f1011',
              color: dark ? 'rgba(255,255,255,0.75)' : '#fff',
              fontSize: 11, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.1)' : '#1a1a1a'
              e.currentTarget.style.color = dark ? '#fff' : '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = dark ? 'transparent' : '#0f1011'
              e.currentTarget.style.color = dark ? 'rgba(255,255,255,0.75)' : '#fff'
            }}
          >
            GET IN TOUCH
          </a>
        </nav>
      </div>
    </header>
  )
}
