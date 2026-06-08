'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
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
      borderBottom: scrolled ? '1px solid var(--gray-200)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <div className="nd-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <Image src="/NEWDIA_CI-01.svg" alt="NEWDIA" width={108} height={20} priority />
        </a>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--gray-600)',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--black)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray-600)')}
            >
              {item.label}
            </button>
          ))}

          {/* MONSTER */}
          <a
            href="https://beos-studio-monster.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="nd-monster-btn"
            style={{
              padding: '7px 16px',
              border: '1px solid var(--lime)',
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--black)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--lime)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            MONSTER
          </a>

          {/* CTA */}
          <a
            href="/consultation"
            style={{
              padding: '10px 24px',
              background: 'var(--black)',
              color: 'var(--white)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--black)')}
          >
            GET IN TOUCH
          </a>
        </nav>
      </div>
    </header>
  )
}
