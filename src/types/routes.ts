import { Incident } from './incident';

export interface RoutesProps {
  incidents: Incident[];
  onAddIncident: (newIncident: Omit<Incident, 'id'>) => void;
} 