import { MessageCircle } from 'lucide-react'
import { buildGeneralWhatsAppUrl } from '../data/siteConfig'
import styles from './FloatingWhatsApp.module.css'

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </a>
  )
}
