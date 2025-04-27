import { Incident } from './incident';

// Common pattern for page props that handle incidents
export interface IncidentPageProps {
  incidents: Incident[];
  onAddIncident: (newIncident: Omit<Incident, 'id'>) => void;
}

export interface DashboardPageProps extends IncidentPageProps {}

export interface ViewIncidentsPageProps extends IncidentPageProps {} 