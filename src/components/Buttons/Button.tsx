import { ButtonProps } from '../../types/components';
import styles from './Button.module.css'; 

export default function Button({
  title,
  icon,
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  className = '',
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  
  const customStyle = backgroundColor ? { backgroundColor } : {};
  
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      style={customStyle}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.title}>{title}</span>
    </button>
  );
}