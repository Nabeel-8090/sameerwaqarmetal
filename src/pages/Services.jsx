import { MessageCircle } from 'lucide-react'
import { buildGeneralWhatsAppUrl } from '../data/siteConfig'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'Custom Metal Fabrication',
    desc: 'We create custom metal products based on your design and requirements, ensuring quality and attention to every detail.',
  },
  {
    num: '02',
    title: 'Precision Cutting & Laser Work',
    desc: 'We provide accurate laser and CNC cutting for clean, smooth, and professional metal designs.',
  },
  {
    num: '03',
    title: 'Decorative Metal Work',
    desc: 'We make stylish Jaffri, wall décor, name plates, and other decorative metal products for homes and businesses.',
  },
  {
    num: '04',
    title: 'Welding & Structural Fabrication',
    desc: 'We build strong and durable metal frames, gates, stands, and other custom fabrication projects.',
  },
  {
    num: '05',
    title: 'Finishing & Coating',
    desc: 'Every product is carefully finished to give it a clean look, long-lasting protection, and excellent quality.',
  },
  {
    num: '06',
    title: 'Delivery & Installation',
    desc: 'We safely deliver your products and also provide installation support for large custom projects.',
  },
];

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">What We Do</span>
          <h1 className={styles.title}>Services built around one workshop, start to finish</h1>
          <p className={styles.lead}>
            We make custom metal products from start to finish. From your idea and design to cutting, finishing, and delivery, everything is handled by our team with care and quality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.list}>
            {services.map((s) => (
              <div key={s.num} className={styles.row}>
                <span className={styles.num}>{s.num}</span>
                <div className={styles.rowBody}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
