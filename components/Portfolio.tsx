'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteData, type PortfolioCategory, type PortfolioItem } from '@/data/portfolio'

// ─── Category label mapping ───────────────────────────────
const catLabel: Record<PortfolioCategory, string> = {
  visual: 'Brand & Visual',
  web: 'Web Design',
  photo: 'Photography',
  marketing: 'Marketing',
}

const categories: { key: PortfolioCategory; label: string }[] = [
  { key: 'visual', label: 'Brand & Visual' },
  { key: 'web', label: 'Web Design' },
  { key: 'photo', label: 'Photography' },
  { key: 'marketing', label: 'Marketing' },
]

// ─── Modal ────────────────────────────────────────────────
function WorkModal({ item, cat, onClose }: { item: PortfolioItem; cat: PortfolioCategory; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0)
  const allImages = [item.thumbnail, ...item.images]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.94)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.22 }}
        style={{
          background: 'var(--white)',
          maxWidth: 960,
          width: '100%',
          maxHeight: '92vh',
          overflow: 'auto',
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div style={{ position: 'relative', background: 'var(--gray-100)', aspectRatio: '4/3' }}>
          <img
            src={allImages[imgIdx]}
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16,
              width: 36, height: 36,
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              fontSize: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >×</button>
        </div>

        {/* Info panel */}
        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--lime)', marginBottom: 12 }}>
              {catLabel[cat]}
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 8, color: 'var(--black)' }}>
              {item.title}
            </h3>
            <div style={{ fontSize: 13, color: 'var(--gray-400)', fontWeight: 500, marginBottom: 28 }}>
              {item.client} · {item.year}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--gray-600)' }}>
              {item.description}
            </p>
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div style={{ marginTop: 32 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 12 }}>
                Images
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    style={{
                      width: 52, height: 36, flexShrink: 0,
                      outline: i === imgIdx ? '2px solid var(--black)' : '2px solid transparent',
                      outlineOffset: 1,
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {item.external_site_url && (
            <a
              href={item.external_site_url}
              target="_blank"
              rel="noopener noreferrer"
              className="nd-btn-outline"
              style={{ marginTop: 32, justifyContent: 'center' }}
            >
              Visit Site →
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Featured editorial card ─────────────────────────────
function WorkCard({
  item,
  cat,
  onClick,
  large = false,
}: {
  item: PortfolioItem
  cat: PortfolioCategory
  onClick: () => void
  large?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: large ? '16/9' : '4/3',
        overflow: 'hidden',
        background: 'var(--gray-100)',
        display: 'block',
        width: '100%',
        cursor: 'pointer',
      }}
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="eager"
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
        }}
      />
      {/* 항상 표시되는 하단 정보 바 */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
        transition: 'background 0.4s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: large ? '28px 32px' : '18px 20px',
      }}>
        {/* 카테고리 — hover 시 나타남 */}
        <div style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--lime)',
          marginBottom: 5,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.25s, transform 0.25s',
        }}>
          {catLabel[cat]}
        </div>
        {/* 제목 — 항상 표시 */}
        <div style={{
          fontSize: large ? 17 : 13,
          fontWeight: 700,
          color: 'white',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: 4,
        }}>
          {item.title}
        </div>
        {/* 클라이언트 · 연도 — 항상 표시 */}
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.02em' }}>
          {item.client} · {item.year}
        </div>
      </div>
    </button>
  )
}

// ─── All-work list row ────────────────────────────────────
function WorkRow({
  item,
  cat,
  index,
  onClick,
}: {
  item: PortfolioItem
  cat: PortfolioCategory
  index: number
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '48px 1fr auto auto 36px',
        alignItems: 'center',
        gap: 24,
        padding: '20px 0',
        width: '100%',
        borderBottom: '1px solid var(--gray-200)',
        textAlign: 'left',
        transition: 'padding-left 0.25s ease',
        paddingLeft: hovered ? 12 : 0,
        background: 'none',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--gray-400)', letterSpacing: '0.1em' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--black)' }}>
        {item.title}
      </span>
      <span style={{ fontSize: 12, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>
        {item.client}
      </span>
      <span style={{ fontSize: 12, color: 'var(--gray-400)', whiteSpace: 'nowrap' }}>
        {item.year}
      </span>
      <span style={{ fontSize: 18, color: hovered ? 'var(--black)' : 'var(--gray-400)', transition: 'color 0.2s' }}>
        →
      </span>
    </button>
  )
}

// ─── Main Portfolio section ───────────────────────────────
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('visual')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [selectedCat, setSelectedCat] = useState<PortfolioCategory>('visual')
  const [showAll, setShowAll] = useState(false)

  const open = (item: PortfolioItem, cat: PortfolioCategory) => {
    setSelectedItem(item)
    setSelectedCat(cat)
  }

  // Featured items across all categories
  const featuredVisual = siteData.gallery.visual.slice(0, 1)[0]
  const featuredWeb = siteData.gallery.web.slice(0, 1)[0]
  const featuredPhoto = siteData.gallery.photo.slice(0, 1)[0]
  const featuredMarketing = siteData.gallery.marketing.slice(0, 1)[0]
  const featuredVisual2 = siteData.gallery.visual[5]

  return (
    <section id="work" className="nd-section" style={{ background: 'var(--white)' }}>
      <div className="nd-container">

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <span className="nd-label" style={{ marginBottom: 12 }}>Selected Work</span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--black)',
            }}>
              작업물
            </h2>
          </div>
          <button
            onClick={() => setShowAll(v => !v)}
            style={{
              fontSize: 12, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--gray-600)',
              display: 'flex', alignItems: 'center', gap: 8,
              paddingBottom: 8,
              borderBottom: '1px solid var(--gray-200)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--black)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--gray-600)')}
          >
            {showAll ? '접기' : '전체 보기'} {showAll ? '↑' : '↓'}
          </button>
        </div>

        {/* Editorial grid — featured */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Row 1: 2fr | 1fr — 양쪽 동시에 즉시 표시 */}
          <div className="nd-work-grid">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <WorkCard item={featuredVisual} cat="visual" onClick={() => open(featuredVisual, 'visual')} large />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}>
              <WorkCard item={featuredWeb} cat="web" onClick={() => open(featuredWeb, 'web')} large />
            </motion.div>
          </div>

          {/* Row 2: 1fr | 2fr */}
          <div className="nd-work-grid-reverse">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <WorkCard item={featuredPhoto} cat="photo" onClick={() => open(featuredPhoto, 'photo')} large />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <WorkCard item={featuredMarketing} cat="marketing" onClick={() => open(featuredMarketing, 'marketing')} large />
            </motion.div>
          </div>

          {/* Row 3: 3-equal */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
            {[siteData.gallery.visual[5], siteData.gallery.web[1], siteData.gallery.photo[3]].map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <WorkCard item={item} cat={i === 1 ? 'web' : i === 2 ? 'photo' : 'visual'} onClick={() => open(item, i === 1 ? 'web' : i === 2 ? 'photo' : 'visual')} />
              </motion.div>
            ))}
          </div>

        </div>

        {/* All work — expandable */}
        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: 64 }}>
                {/* Category tabs */}
                <div style={{ display: 'flex', gap: 0, marginBottom: 0, borderBottom: '1px solid var(--gray-200)' }}>
                  {categories.map(cat => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      style={{
                        padding: '12px 28px',
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: activeCategory === cat.key ? 'var(--black)' : 'var(--gray-400)',
                        borderBottom: activeCategory === cat.key ? '2px solid var(--black)' : '2px solid transparent',
                        marginBottom: -1,
                        transition: 'all 0.2s',
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* List */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div style={{ borderTop: 'none' }}>
                      {siteData.gallery[activeCategory].map((item, i) => (
                        <WorkRow
                          key={item.id}
                          item={item}
                          cat={activeCategory}
                          index={i}
                          onClick={() => open(item, activeCategory)}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <WorkModal item={selectedItem} cat={selectedCat} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
