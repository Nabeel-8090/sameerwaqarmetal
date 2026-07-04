import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from 'lucide-react'
import { siteConfig, buildGeneralWhatsAppUrl } from '../data/siteConfig'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className="eyebrow">Get in Touch</span>
          <h1 className={styles.title}>Let's talk about your project</h1>
          <p className={styles.lead}>
            Have an idea or need a custom metal product? Send us a message on WhatsApp with your design, photo, or requirements, and we'll get back to you with the details.
          </p>
        </div>
      </section>

      <section className={`container ${styles.grid}`}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Phone size={20} strokeWidth={1.6} />
            <div>
              <span className={styles.cardLabel}>Phone</span>
              <a href={`tel:${siteConfig.phoneHref}`} className={styles.cardValue}>
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <MessageCircle size={20} strokeWidth={1.6} />
            <div>
              <span className={styles.cardLabel}>WhatsApp</span>
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardValue}
              >
                {siteConfig.phoneDisplayWhatsApp}
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <Mail size={20} strokeWidth={1.6} />
            <div>
              <span className={styles.cardLabel}>Email</span>
              <a href={`mailto:${siteConfig.email}`} className={styles.cardValue}>
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <MapPin size={20} strokeWidth={1.6} />
            <div>
              <span className={styles.cardLabel}>Workshop Address</span>
              <span className={styles.cardValue}>{siteConfig.address}</span>
            </div>
          </div>

          <div className={styles.card}>
            <Clock size={20} strokeWidth={1.6} />
            <div>
              <span className={styles.cardLabel}>Business Hours</span>
              {siteConfig.hours.map((h) => (
                <span key={h.day} className={styles.hoursRow}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </span>
              ))}
            </div>
          </div>

          <a
            href={buildGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.bigBtn}`}
          >
            <MessageCircle size={18} /> Contact Us on WhatsApp
          </a>
        </div>

        <div className={styles.mapCol}>
          <div className={styles.mapFrame}>
            <iframe
              title="Sameer Waqar Metal Creation location"
              src={siteConfig.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.mapFooter}>
            <div>
              <span className={styles.cardLabel}>Address</span>
              <p>{siteConfig.address}</p>
            </div>
            <a
              href={siteConfig.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
