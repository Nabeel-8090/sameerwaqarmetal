import { Link } from 'react-router-dom'
import {
  MessageCircle,
  ArrowRight,
  Scissors,
  ShieldCheck,
  Layers,
  PenTool,
  Wallet,
  Headset,
} from 'lucide-react'
import { products } from '../data/products'
import { buildGeneralWhatsAppUrl } from '../data/siteConfig'
import ProductCard from '../components/ProductCard'
import ProductBlueprint from '../components/ProductBlueprint'
import styles from './Home.module.css'

const whyChooseUs = [
  { icon: Scissors, title: 'Precision Cutting', desc: 'Laser and CNC accuracy on every piece, down to the millimeter.' },
  { icon: ShieldCheck, title: 'Premium Quality', desc: 'Every product inspected before it leaves the workshop.' },
  { icon: Layers, title: 'Durable Materials', desc: 'Industrial-grade steel built to withstand daily use.' },
  { icon: PenTool, title: 'Custom Designs', desc: 'Your sketch or idea, fabricated exactly to spec.' },
  { icon: Wallet, title: 'Affordable Pricing', desc: 'Direct workshop pricing with no hidden costs.' },
  { icon: Headset, title: 'Fast Customer Support', desc: 'Quick responses on WhatsApp, every step of the order.' },
]

const galleryItems = products.slice(0, 8)

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>
            Premium Custom Metal Creations, Crafted with Precision
          </h1>
          <p className={styles.heroText}>
            SAMEER WAQAR METAL CREATION designs and manufactures high-quality custom metal products with precision and craftsmanship. From decorative pieces to functional metal creations, every product is built to order with attention to quality, durability, and detail.
          </p>
          <div className={styles.heroActions}>
            <Link to="/products" className="btn btn-primary">
              View Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className={styles.heroMeta}>
          <div className={`container ${styles.heroMetaInner}`}>
            <span>01 / Design</span>
            <span>02 / Precision Cut</span>
            <span>03 / Finish</span>
            <span>04 / Delivery</span>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className={`section ${styles.aboutTeaser}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-heading">
              Metal fabrication built on discipline, not shortcuts
            </h2>
            <p className="section-sub">
              We create custom metal products with quality materials and precise workmanship. From name plates and wall décor to Jaffri, BBQ grills, and other custom designs, every product is made with care, attention to detail, and a commitment to lasting quality.
            </p>
            <Link to="/about" className={styles.aboutLink}>
              More About Us <ArrowRight size={15} />
            </Link>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>9</span>
              <span className={styles.statLabel}>Product Lines</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Made to Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className={`section section--tight ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Our Range</span>
              <h2 className="section-heading">Products, made to order</h2>
            </div>
            <Link to="/products" className={styles.viewAll}>
              View All Products <ArrowRight size={15} />
            </Link>
          </div>
          <div className={styles.productGrid}>
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-heading">What sets our workshop apart</h2>
          <div className={styles.whyGrid}>
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.whyCard}>
                <Icon size={22} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
