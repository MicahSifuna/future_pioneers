import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Donate from './components/Donate';
import Services from './components/Services';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Donate' element={<Donate />}/>
        <Route path='/Services' element={<Services />}/>
      </Routes>
        {/* <App /> */}

    </Router>
 </React.StrictMode>,
  document.getElementById('root')
);
