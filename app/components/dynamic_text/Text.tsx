import styles from './text.module.scss'

export default function Text() {
  return (
    <div className={styles.container}>
      <div className={styles.staticText}>I will help you </div>
      <div className={styles.dynamicTextWrapper}>
        <div className={styles.dynamicText}>expand your business</div>
        <div className={styles.dynamicText}>find the right customer</div>
        <div className={styles.dynamicText}>level up your brand</div>
      </div>
    </div>
  )
}
