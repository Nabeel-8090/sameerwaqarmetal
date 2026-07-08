import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [error, setError] = useState('');

  // Cloudinary credentials from env
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
  const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

  const generateSignature = async (timestamp, secret) => {
    const str = `timestamp=${timestamp}${secret}`;
    const msgBuffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    description: '',
    features: '',
    sizes: '',
    material: '',
    finish: '',
    customization: '',
    delivery: ''
  });

  const [imageFiles, setImageFiles] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      shortDescription: '',
      description: '',
      features: '',
      sizes: '',
      material: '',
      finish: '',
      customization: '',
      delivery: ''
    });
    setImageFiles([]);
    setIsEditing(false);
    setCurrentId(null);
    setError('');
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentId(product.id);
    setFormData({
      name: product.name || '',
      shortDescription: product.shortDescription || '',
      description: product.description || '',
      features: Array.isArray(product.features) ? product.features.join('\n') : (product.features || ''),
      sizes: Array.isArray(product.sizes) ? product.sizes.join('\n') : (product.sizes || ''),
      material: product.material || '',
      finish: product.finish || '',
      customization: product.customization || '',
      delivery: product.delivery || ''
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let imageUrls = [];
      if (imageFiles.length > 0) {
        for (const file of imageFiles) {
          const timestamp = Math.floor(Date.now() / 1000);
          const signature = await generateSignature(timestamp, apiSecret);

          const uploadData = new FormData();
          uploadData.append('file', file);
          uploadData.append('api_key', apiKey);
          uploadData.append('timestamp', timestamp);
          uploadData.append('signature', signature);

          const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: uploadData
          });

          if (!res.ok) {
            const errText = await res.text();
            throw new Error(`Cloudinary upload failed: ${errText}`);
          }

          const data = await res.json();
          imageUrls.push(data.secure_url);
        }
      }

      const dataToSave = {
        ...formData,
        features: formData.features.split('\n').filter(Boolean),
        sizes: formData.sizes.split('\n').filter(Boolean),
        images: imageUrls.length > 0 ? imageUrls : undefined,
      };

      // Remove undefined fields
      Object.keys(dataToSave).forEach(key => dataToSave[key] === undefined && delete dataToSave[key]);

      if (isEditing) {
        await updateDoc(doc(db, "products", currentId), dataToSave);
      } else {
        await addDoc(collection(db, "products"), dataToSave);
      }

      resetForm();
      fetchProducts();
    } catch (err) {
      console.error(err);
      setError("Failed to save: " + err.message);
    }
  };

  return (
    <section className={styles.dashboardSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Admin Dashboard</h1>
          <div className={styles.headerActions}>
            <button onClick={() => navigate('/products')} className={styles.navBtn}>View Products</button>
            <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
          </div>
        </div>

        <div className={styles.dashboardGrid}>
          {/* Form Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>{isEditing ? 'Edit Product' : 'Create New Product'}</h3>
            {error && <div className={styles.errorBox}>{error}</div>}
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Name</label>
                <input name="name" value={formData.name} onChange={handleInputChange} required className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Short Description</label>
                <input name="shortDescription" value={formData.shortDescription} onChange={handleInputChange} required className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} required className={styles.textarea}></textarea>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Features (one per line)</label>
                <textarea name="features" value={formData.features} onChange={handleInputChange} className={styles.textarea}></textarea>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Sizes (one per line)</label>
                <textarea name="sizes" value={formData.sizes} onChange={handleInputChange} className={styles.textarea}></textarea>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Material</label>
                <input name="material" value={formData.material} onChange={handleInputChange} className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Finish</label>
                <input name="finish" value={formData.finish} onChange={handleInputChange} className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Customization</label>
                <input name="customization" value={formData.customization} onChange={handleInputChange} className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Delivery Info</label>
                <input name="delivery" value={formData.delivery} onChange={handleInputChange} className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Upload Images</label>
                <input type="file" multiple onChange={handleImageChange} accept="image/*" className={`${styles.input} ${styles.fileInput}`} />
                {isEditing && <span className={styles.fileHint}>Leave empty to keep existing images.</span>}
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.btnPrimary}>{isEditing ? 'Update Product' : 'Create Product'}</button>
                {isEditing && <button type="button" className={styles.btnSecondary} onClick={resetForm}>Cancel</button>}
              </div>
            </form>
          </div>

          {/* List Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Existing Products</h3>
            {loading ? <p className={styles.loadingText}>Loading...</p> : (
              <ul className={styles.productList}>
                {products.map(product => (
                  <li key={product.id} className={styles.productItem}>
                    <div className={styles.productInfo}>
                      <h4>{product.name}</h4>
                      <p>{product.shortDescription}</p>
                    </div>
                    <div className={styles.productActions}>
                      <button onClick={() => handleEdit(product)} className={`${styles.actionBtn} ${styles.editBtn}`}>Edit</button>
                      <button onClick={() => handleDelete(product.id)} className={`${styles.actionBtn} ${styles.deleteBtn}`}>Delete</button>
                    </div>
                  </li>
                ))}
                {products.length === 0 && <p className={styles.emptyState}>No products found. Create one to get started.</p>}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}