import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Switches from './utils/switches';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switches />
      </BrowserRouter>
    </div>
  );
}

export default App;
