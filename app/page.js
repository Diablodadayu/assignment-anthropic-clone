'use client'

import styles from './page.module.css'
import Link from 'next/link'
import { useState } from 'react'
import JobApplicationModal from './components/JobApplicationModal'
import DataViewerModal from './components/DataViewerModal'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDataViewerOpen, setIsDataViewerOpen] = useState(false)

  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo}>ANTHROP\C</div>
            <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
              <Link href="/" className={styles.navLink}>Claude</Link>
              <Link href="/" className={styles.navLink}>API</Link>
              <Link href="/" className={styles.navLink}>Solutions</Link>
              <Link href="/" className={styles.navLink}>Research</Link>
              <Link href="/" className={styles.navLink}>Commitments</Link>
              <Link href="/" className={styles.navLink}>Learn</Link>
              <Link href="/" className={styles.navLink}>News</Link>
            </div>
            <div className={styles.navButtons}>
              <button className={styles.tryButton}>Try Claude</button>
              <button 
                className={styles.menuButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ''}`}></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>AI <a>research</a> and <a>products</a> that put safety at the frontier</h1>
          <div className={styles.heroCards}>
            <div className={styles.card}>
              <h3>Claude.ai</h3>
              <h4>Meet Claude 3.7 Sonnet</h4>
              <p>Claude 3.7 Sonnet, our most intelligent AI model, is now available.</p>
              <button className={styles.blackButton}>Talk to Claude</button>
            </div>
            <div className={styles.card}>
              <h3>API</h3>
              <h4>Build with Claude</h4>
              <p>Create AI-powered applications and custom experiences using Claude.</p>
              <button className={styles.transparentButton}>Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <h2>At Anthropic, we build AI to serve humanity&apos;s long-term well-being.</h2>
          <p>While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects. That&apos;s why we focus on building tools with human benefit at their foundation, like Claude.</p>
          <p>Through our daily research, policy work, and product design, we aim to show what responsible AI development looks like in practice.</p>
        </div>
      </section>

      <section className={styles.coreViews}>
        <div className={styles.container}>
          <div className={styles.coreViewsGrid}>
            <div className={styles.coreViewCard}>
              <div className={styles.coreViewIcon}>
                <Image 
                  src="/images/core-view-icon.svg" 
                  alt="Core view icon"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3>Core views on AI Safety</h3>
            </div>
            <div className={styles.coreViewCard}>
              <div className={styles.coreViewIcon}>
                <Image 
                  src="/images/anthropic-policy.svg" 
                  alt="Core view icon"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3>Anthropic&apos;s Responsible Scaling Policy</h3>
            </div>
            <div className={styles.coreViewCard}>
              <div className={styles.coreViewIcon}>
                <Image 
                  src="/images/anthropic-academy.svg" 
                  alt="Core view icon"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3>Anthropic Academy: Learn to build with Claude</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.container}>
          <h2>Featured</h2>
          <ul className={styles.featuredList}>
            <li>
              <h3>Tracing the thoughts of a large language model</h3>
              <div className={styles.metadata}>
                <p className={styles.category}>Interpretability</p>
                <p className={styles.date}>Mar 27, 2025</p>
              </div>
            </li>
            <li>
              <h3>Anthropic Economic Index</h3>
              <div className={styles.metadata}>
                <p className={styles.category}>Societal Impacts</p>
                <p className={styles.date}>Mar 27, 2025</p>
              </div>
            </li>
            <li>
              <h3>Claude 3.7 Sonnet and Claude Code</h3>
              <div className={styles.metadata}>
                <p className={styles.category}>Product</p>
                <p className={styles.date}>Feb 24, 2025</p>
              </div>
            </li>
            <li>
              <h3>Claude&apos;s extended thinking</h3>
              <div className={styles.metadata}>
                <p className={styles.category}>Product</p>
                <p className={styles.date}>Feb 24, 2025</p>
              </div>
            </li>
            <li>
              <h3>Alignment faking in large language models</h3>
              <div className={styles.metadata}>
                <p className={styles.category}>Alignment science</p>
                <p className={styles.date}>Dec 18, 2024</p>
              </div>
            </li>
            <li>
              <h3>Introducing the Model Context Protocol</h3>
              <div className={styles.metadata}>
                <p className={styles.category}>Product</p>
                <p className={styles.date}>Nov 25, 2024</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.joinUs}>
        <div className={styles.container}>
          <h2>Want to help us build the future of safe AI?</h2>
          <div className={styles.buttonGroup}>
            <button 
              className={styles.blackButton}
              onClick={() => setIsModalOpen(true)}
            >
              Apply for roles
            </button>
            <button 
              className={styles.blackButton}
              onClick={() => setIsDataViewerOpen(true)}
            >
              View Data
            </button>
          </div>
        </div>
      </section>

      <JobApplicationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <DataViewerModal 
        isOpen={isDataViewerOpen}
        onClose={() => setIsDataViewerOpen(false)}
      />
    </main>
  )
}
