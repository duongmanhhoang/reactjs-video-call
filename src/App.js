
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import Routes from './routes';
import './App.scss';

const App = () => {
  const history = useHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  )
}

export default App;
