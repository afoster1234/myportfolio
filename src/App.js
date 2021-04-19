import { BaseRouter } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>

        <BaseRouter />

      </Router>
    </div>
  );
}

export default App;
