import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { MOCK_INCIDENTS } from './features/incidents/mockData';
import { Incident } from './types';
import { getRoutes } from './routes/routes';

function App() {
  // Centralized incident state shared between pages
  const [incidents, setIncidents] = useState<Incident[]>(MOCK_INCIDENTS);

  function handleAddIncident(newIncident: Omit<Incident, 'id'>) {
    const newId = incidents.length + 1;
    const incidentWithId = { ...newIncident, id: newId };
    setIncidents([incidentWithId, ...incidents]);
  }

  const routes = getRoutes({
    incidents,
    onAddIncident: handleAddIncident
  });

  const routeElement = useRoutes(routes);

  return (
    <div className="app">
      {routeElement}
    </div>
  );
}

export default App;
