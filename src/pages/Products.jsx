import { useState, useEffect } from 'react';
import { products as hardcodedProducts } from '../data/products';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard'
import styles from './Products.module.css'

export default function Products() {
  const [products, setProducts] = useState(hardcodedProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDynamicProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'products'));
        const dbProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Combine DB products with hardcoded, db takes precedence
        setProducts([...dbProducts, ...hardcodedProducts]);
      } catch (err) {
        console.error('Error fetching dynamic products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDynamicProducts();
  }, []);

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
          {loading ? <p>Loading products...</p> : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
