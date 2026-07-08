import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const thumbnail = product.images && product.images.length > 0 ? product.images[0] : null

  return (
    <Link to={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {thumbnail ? (
          <img src={thumbnail} alt={product.name} className={styles.image} />
        ) : (
          <div className={styles.image} style={{ backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontSize: '14px' }}>No Image</div>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{product.name}</h3>
          <ArrowUpRight size={18} className={styles.icon} />
        </div>
        <p className={styles.desc}>{product.shortDescription}</p>
        <span className={styles.viewDetails}>View Details</span>
      </div>
    </Link>
  )
}