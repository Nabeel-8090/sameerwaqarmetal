import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { MessageCircle, ChevronRight, Ruler, Layers, Sparkles, Settings2, Truck } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { buildWhatsAppUrl } from '../data/siteConfig'
import ProductBlueprint from '../components/ProductBlueprint'
import ProductCard from '../components/ProductCard'
import styles from './ProductDetails.module.css'

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (product) document.title = `${product.name} | Sameer Waqar Metal Creation`
  }, [product])

  useEffect(() => {
    setActiveIndex(0)
  }, [id])

  if (!product) return <Navigate to="/products" replace />

  const hasPhotos = product.images && product.images.length > 0
  const activeImage = hasPhotos ? product.images[activeIndex] : null

  const related = getRelatedProducts(product.id, 3)
  const productUrl = typeof window !== 'undefined' ? `${window.location.origin}/products/${product.id}` : ''
  const whatsappUrl = buildWhatsAppUrl({ productName: product.name, productUrl })

  const specs = [
    { icon: Ruler, label: 'Available Sizes', value: product.sizes.join(' · ') },
    { icon: Layers, label: 'Material', value: product.material },
    { icon: Sparkles, label: 'Finish', value: product.finish },
    { icon: Settings2, label: 'Customization', value: product.customization },
    { icon: Truck, label: 'Estimated Delivery', value: product.delivery },
  ]

  return (
    <>
      <div className={`container ${styles.breadcrumb}`}>
        <Link to="/">Home</Link>
        <ChevronRight size={13} />
        <Link to="/products">Products</Link>
        <ChevronRight size={13} />
        <span>{product.name}</span>
      </div>

      <section className={`container ${styles.top}`}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            {activeImage ? (
              <img src={activeImage} alt={`${product.name} — view ${activeIndex + 1}`} />
            ) : (
              <ProductBlueprint type={product.blueprint} />
            )}
          </div>

          {hasPhotos && product.images.length > 1 && (
            <div className={styles.thumbRow}>
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  className={`${styles.thumb} ${i === activeIndex ? styles.thumbActive : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show image ${i + 1} of ${product.name}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={styles.info}>
          <span className="eyebrow">Product</span>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.desc}>{product.description}</p>

          <div className={styles.features}>
            <h3>Features</h3>
            <ul>
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.orderBtn}`}
          >
            <MessageCircle size={18} /> Order on WhatsApp
          </a>
        </div>
      </section>

      <section className={`container ${styles.specsSection}`}>
        <h2 className={styles.specsTitle}>Specifications</h2>
        <div className={styles.specsGrid}>
          {specs.map(({ icon: Icon, label, value }) => (
            <div key={label} className={styles.specCard}>
              <Icon size={19} strokeWidth={1.6} />
              <div>
                <span className={styles.specLabel}>{label}</span>
                <span className={styles.specValue}>{value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h3>Ready to order this piece?</h3>
            <p>Send us your size and finish preference — we'll confirm price and timeline on WhatsApp.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light">
            <MessageCircle size={17} /> Order on WhatsApp
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className={`container section section--tight`}>
          <span className="eyebrow">You May Also Like</span>
          <h2 className="section-heading">Related Products</h2>
          <div className={styles.relatedGrid}>
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}