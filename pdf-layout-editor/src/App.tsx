import { Link, RouterSwitch, useRouteOptions } from 'react-typesafe-routes';
import { Router } from 'react-typesafe-routes';
import EditorPage from './pages/EditorPage';
import Login from './pages/Login';
import { router } from './Router';

const AppBar = () => {
  return (
    <div>
      <ul>
        <li><Link to={router.home()}>Home</Link></li>
        <li><Link to={router.editor()}>Players</Link></li>
      </ul>
    </div>
  );
}

const App = () => {
  const { appBar } = useRouteOptions(router);

  return (
      <div>
        { appBar && <AppBar />}
        <RouterSwitch router={router} />
      </div>
  );
}

export default App;
