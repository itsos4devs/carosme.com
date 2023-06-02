import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Developed by <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> CARSOME CyberDefense Team
      </footer>
    </>
  )
}
