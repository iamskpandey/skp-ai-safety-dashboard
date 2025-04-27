import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarProps } from '../../types';
import styles from './Sidebar.module.css';

export default function Sidebar({ activeView }: SidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/dashboard' },
    { id: 'incidents', label: 'Incidents', icon: '🔔', path: '/incidents' }
  ];
  
  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  
  function handleNavClick(path: string) {
    navigate(path);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }
  
  return (
    <>
      <div className={styles.mobileNav}>
        <h2 className={styles.mobileTitle}>AI Safety</h2>
        <button 
          className={styles.menuToggle} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNavList}>
              {navItems.map(item => (
                <li key={item.id}>
                  <button 
                    className={`${styles.mobileNavItem} ${activeView === item.id ? styles.active : ''}`}
                    onClick={() => handleNavClick(item.path)}
                  >
                    <span className={styles.icon}>{item.icon}</span>
                    <span className={styles.label}>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <h2>AI Safety</h2>
        </div>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  className={`${styles.navItem} ${activeView === item.id ? styles.active : ''}`}
                  onClick={() => handleNavClick(item.path)}
                >
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.label}>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}