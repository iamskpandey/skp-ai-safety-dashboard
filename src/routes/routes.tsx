import { RouteObject } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ViewIncidentsPage from '../pages/ViewIncidentsPage';

export const getRoutes = (): RouteObject[] => [
  {
    path: '/',
    element: <DashboardPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  },
  {
    path: '/incidents',
    element: <ViewIncidentsPage  />
  }
];
