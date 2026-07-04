import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import styles from './Products.module.css'

export default function Products() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.header}`}>
        <span className="eyebrow">Full Catalogue</span>
        <h1 className={styles.title}>Our Products</h1>
        <p className={styles.sub}>
          Every product below is fabricated to order. Select a piece to see materials, sizes,
          finishes and customization options, or message us directly on WhatsApp for a quote.
        </p>
      </div>
      <div className="container">
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
