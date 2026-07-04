import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ProductBlueprint from './ProductBlueprint'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        {product.image ? (
          <img src={product.image} alt={product.name} className={styles.image} />
        ) : (
          <ProductBlueprint type={product.blueprint} className={styles.image} />
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
