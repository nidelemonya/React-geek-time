import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes} from 'react-router-config';
import routes from './routes/index';
import { Provider } from 'react-redux';
// import store from './store';
import './App.css';

import { IconStyle } from './assets/iconfont/iconfont';


function App() {

  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <HashRouter>
          <IconStyle/>
          { renderRoutes(routes) }
        </HashRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
