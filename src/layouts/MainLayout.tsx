import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { MainLayoutProps } from '../types';
import styles from './MainLayout.module.css';

export default function MainLayout({ 
  children, 
  title, 
  rightAction 
}: MainLayoutProps) {
  const location = useLocation();
  const activeView = location.pathname === '/' ? 'dashboard' : location.pathname.slice(1);

  return (
    <div className={styles.layoutContainer}>
      <Sidebar activeView={activeView} />
      
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{title}</h1>
          </div>
          {rightAction && (
            <div className={styles.actions}>
              {rightAction}
            </div>
          )}
        </header>
        
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}