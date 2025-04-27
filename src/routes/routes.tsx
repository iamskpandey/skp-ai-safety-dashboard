import { RouteObject } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ViewIncidentsPage from '../pages/ViewIncidentsPage';
import { RoutesProps } from '../types';

export const getRoutes = ({ incidents, onAddIncident }: RoutesProps): RouteObject[] => [
  {
    path: '/',
    element: <DashboardPage incidents={incidents} onAddIncident={onAddIncident} />
  },
  {
    path: '/dashboard',
    element: <DashboardPage incidents={incidents} onAddIncident={onAddIncident} />
  },
  {
    path: '/incidents',
    element: <ViewIncidentsPage incidents={incidents} onAddIncident={onAddIncident} />
  }
];
