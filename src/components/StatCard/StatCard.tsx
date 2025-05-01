import { StatCardProps } from '../../types';
import styles from './StatCard.module.css';

export default function StatCard({
  value,
  label,
  headerColor = '#4600FF',
  className = '',
  size = 'medium',
  onClick,
}: StatCardProps) {
  return (
    <div 
      className={`${styles.statCard} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      <div 
        className={styles.header} 
        style={{ backgroundColor: headerColor }}
      />
      <div className={styles.content}>
        <div className={styles.value} style={{color: headerColor}}>{value}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
}