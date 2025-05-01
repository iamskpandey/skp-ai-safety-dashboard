import { useRoutes } from 'react-router-dom';
import './App.css';
import { getRoutes } from './routes/routes';

function App() {
  const routes = getRoutes();

  const routeElement = useRoutes(routes);

  return (
    <div className="app">
      {routeElement}
    </div>
  );
}

export default App;
