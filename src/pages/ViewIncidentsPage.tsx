import { useState, useMemo } from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Buttons/Button';
import IncidentCard from '../components/IncidentCard/IncidentCard';
import NewIncidentForm from '../components/NewIncidentForm/NewIncidentForm';
import { ViewIncidentsPageProps, Incident, SeverityType, SortDirection } from '../types';
import { sortByDate } from '../utils/dateUtils';
import styles from './ViewIncidentsPage.module.css';

export default function ViewIncidentsPage({ incidents, onAddIncident }: ViewIncidentsPageProps) {
  const [filterSeverity, setFilterSeverity] = useState<SeverityType | 'All'>('All');
  const [sortDirection, setSortDirection] = useState<SortDirection>('newest');
  const [showForm, setShowForm] = useState(false);
  
  const filteredAndSortedIncidents = useMemo(() => {
    const filtered = filterSeverity === 'All' 
      ? incidents 
      : incidents.filter(incident => incident.severity === filterSeverity);
    
    return [...filtered].sort((a, b) => 
      sortByDate(a.reported_at, b.reported_at, sortDirection)
    );
  }, [incidents, filterSeverity, sortDirection]);
  
  function handleAddIncident(newIncident: Omit<Incident, 'id'>) {
    onAddIncident(newIncident);
    setShowForm(false);
  }

  return (
    <MainLayout 
      title="Incident Reports" 
      rightAction={
        <Button 
          title={showForm ? "Hide Form" : "New Incident"} 
          onClick={() => setShowForm(!showForm)} 
        />
      }
    >
      {showForm ? (
        <div className={styles.formWrapper}>
          <NewIncidentForm 
            onSubmit={handleAddIncident}
            onCancel={() => setShowForm(false)}
          />
        </div>
      ) : (
        <>
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Sort by Date:</label>
              <div className={styles.buttonGroup}>
                <button 
                  className={`${styles.filterButton} ${sortDirection === 'newest' ? styles.active : ''}`} 
                  onClick={() => setSortDirection('newest')}
                >
                  Newest First
                </button>
                <button 
                  className={`${styles.filterButton} ${sortDirection === 'oldest' ? styles.active : ''}`} 
                  onClick={() => setSortDirection('oldest')}
                >
                  Oldest First
                </button>
              </div>
            </div>
            
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Filter by Severity:</label>
              <div className={styles.buttonGroup}>
                {(['All', 'Low', 'Medium', 'High'] as const).map(severity => (
                  <button 
                    key={severity}
                    className={`${styles.filterButton} ${filterSeverity === severity ? styles.active : ''}`} 
                    onClick={() => setFilterSeverity(severity)}
                  >
                    {severity}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.incidentsList}>
            {filteredAndSortedIncidents.map(incident => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}

            {filteredAndSortedIncidents.length === 0 && (
              <div className={styles.noResults}>
                No incidents match your current filters.
              </div>
            )}
          </div>
        </>
      )}
    </MainLayout>
  );
}