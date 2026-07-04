import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <span className="mono-tag">Error 404</span>
        <h1 className={styles.title}>This page doesn't exist</h1>
        <p className={styles.text}>
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
