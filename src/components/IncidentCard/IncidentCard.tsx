import { useState } from 'react';
import { IncidentCardProps } from '../../types';
import { formatDate } from '../../utils/dateUtils';
import styles from './IncidentCard.module.css';

export default function IncidentCard({ incident }: IncidentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  function toggleDetails() {
    setIsExpanded(!isExpanded);
  }
  
  function getSeverityClass(severity: string) {
    switch (severity.toLowerCase()) {
      case 'low':
        return styles.lowCard;
      case 'medium':
        return styles.mediumCard;
      case 'high':
        return styles.highCard;
      default:
        return '';
    }
  }

  function getSeverityBadgeClass(severity: string) {
    switch (severity.toLowerCase()) {
      case 'low':
        return styles.lowBadge;
      case 'medium':
        return styles.mediumBadge;
      case 'high':
        return styles.highBadge;
      default:
        return '';
    }
  }

  const cardClass = `${styles.card} ${getSeverityClass(incident.severity)}`;
  const badgeClass = `${styles.severityBadge} ${getSeverityBadgeClass(incident.severity)}`;

  return (
    <div className={cardClass}>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.title}>{incident.title}</h3>
          <div className={badgeClass}>{incident.severity}</div>
        </div>
        
        <div className={styles.dateSection}>
          <span className={styles.dateIcon}>📅</span>
          <span className={styles.date}>{formatDate(incident.reported_at)}</span>
        </div>
        
        <div className={styles.detailsToggle} onClick={toggleDetails}>
          <span>View Details</span>
          <span className={`${styles.arrow} ${isExpanded ? styles.expanded : ''}`}>▼</span>
        </div>
      </div>
      
      {isExpanded && (
        <div className={styles.description}>
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
}