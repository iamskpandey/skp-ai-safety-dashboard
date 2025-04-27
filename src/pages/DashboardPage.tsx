import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Button from '../components/Buttons/Button';
import StatCard from '../components/StatCard/StatCard';
import IncidentCard from '../components/IncidentCard/IncidentCard';
import NewIncidentForm from '../components/NewIncidentForm/NewIncidentForm';
import { DashboardPageProps, Incident } from '../types';
import styles from './DashboardPage.module.css';

export default function DashboardPage({ incidents, onAddIncident }: DashboardPageProps) {
  const [showForm, setShowForm] = useState(false);

  const totalIncidents = incidents.length;
  const highSeverityCount = incidents.filter(incident => incident.severity === 'High').length;
  const mediumSeverityCount = incidents.filter(incident => incident.severity === 'Medium').length;
  const lowSeverityCount = incidents.filter(incident => incident.severity === 'Low').length;

  function handleAddIncident(newIncident: Omit<Incident, 'id'>) {
    onAddIncident(newIncident);
    setShowForm(false);
  }

  return (
    <MainLayout 
      title="Dashboard" 
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
        <div className={styles.statsContainer}>
          <div className={styles.statsRow}>
            <StatCard 
              value={totalIncidents} 
              label="TOTAL INCIDENTS"
              size="small"
            />

            <StatCard 
              value={highSeverityCount}
              label="HIGH SEVERITY" 
              headerColor="#c62828"
              size="small"
            />

            <StatCard 
              value={mediumSeverityCount}
              label="MEDIUM SEVERITY" 
              headerColor="#f57c00"
              size="small"
            />

            <StatCard 
              value={lowSeverityCount}
              label="LOW SEVERITY" 
              headerColor="#2e7d32"
              size="small"
            />
          </div>

          <div className={styles.latestIncidents}>
            <h2 className={styles.sectionTitle}>Latest Incident Reports</h2>
            <div className={styles.incidentsList}>
              {incidents.slice(0, 3).map(incident => (
                <IncidentCard key={incident.id} incident={incident} />
              ))}
              
              {incidents.length === 0 && (
                <div className={styles.noResults}>
                  No incidents have been reported yet.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}