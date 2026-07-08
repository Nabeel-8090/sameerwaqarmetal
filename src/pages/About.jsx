import { CheckCircle2 } from 'lucide-react'
import styles from './About.module.css'

const values = [
  {
    title: 'Custom Fabrication',
    desc: 'Every piece is built to the customer\u2019s exact requirements — from a rough sketch to a finished, functional product.',
  },
  {
    title: 'Decorative Products',
    desc: 'Beyond structural work, we design decorative metal pieces that bring character to homes, offices and storefronts.',
  },
  {
    title: 'Precision Workmanship',
    desc: 'Measured twice, cut once. Every panel and joint is checked against spec before it moves to finishing.',
  },
  {
    title: 'Durable Materials',
    desc: 'We work exclusively with industrial-grade steel and finishes rated for years of daily use.',
  },
  {
    title: 'Attention to Detail',
    desc: 'Clean edges, consistent welds, and finishes that hold up — the small things that separate craft from output.',
  },
  {
    title: 'Customer Satisfaction',
    desc: 'We stay in the conversation from first sketch to final delivery, so there are no surprises.',
  },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'Share your idea, measurements or reference photos with our team over WhatsApp.' },
  { step: '02', title: 'Design & Quote', desc: 'We confirm material, size and finish, and provide a clear price and timeline.' },
  { step: '03', title: 'Fabrication', desc: 'Your piece is cut, welded and finished in our workshop under close supervision.' },
  { step: '04', title: 'Delivery', desc: 'Finished work is inspected, packed carefully, and delivered or ready for pickup.' },
]

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">About the Workshop</span>
          <h1 className={styles.title}>Craft, precision, and a workshop that stands behind its work</h1>
          <p className={styles.lead}>
            METALEDGE Metal Creation manufactures custom metal fabrication and decorative
            products with precision workmanship, durable materials and close attention to
            detail. From a single name plate to full architectural installations, every order
            passes through the same disciplined process — and every customer gets a workshop
            that treats their project like its own.
          </p>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <span className="eyebrow">What We Stand For</span>
          <h2 className="section-heading">Built on six working principles</h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <CheckCircle2 size={20} strokeWidth={1.6} />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--tight ${styles.processSection}`}>
        <div className="container">
          <span className="eyebrow">How We Work</span>
          <h2 className="section-heading">From idea to installed, in four steps</h2>
          <div className={styles.processGrid}>
            {process.map((p, i) => (
              <div key={p.step} className={styles.processCard}>
                <span className={styles.processStep}>{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < process.length - 1 && <span className={styles.processLine} />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
