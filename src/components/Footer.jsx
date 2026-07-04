import { Link } from 'react-router-dom'
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig, buildGeneralWhatsAppUrl } from '../data/siteConfig'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.brand}>
            <img src="/favicon.png" alt="Sameer Waqar Metal Creation logo" className={styles.logo} />
            <span>
              <span className={styles.brandName}>SAMEER WAQAR</span>
              <span className={styles.brandSlogan}>Metal Creation</span>
            </span>
          </Link>
          <p className={styles.desc}>
            Precision metal fabrication and custom decorative pieces, built to last and finished
            with care.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Get in Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <Phone size={16} />
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Order Directly</h4>
          <p className={styles.desc}>Reach us instantly on WhatsApp for quotes and orders.</p>
          <a
            href={buildGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-light ${styles.whatsappBtn}`}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
          <a
            href={siteConfig.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            View on Google Maps →
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
          <span className={styles.craft}>Precision Fabrication · Karachi</span>
        </div>
      </div>
    </footer>
  )
}