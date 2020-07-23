import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Explore from'./pages/explore/Explore';
import Forum from'./pages/forum/Forum';
import Study from './pages/study/Study';
import My from './pages/my/My';
import { IconStyle } from './assets/iconfont/iconfont';
// import { HashRouter } from 'react-router-dom';


function App() {
  // fetch('http://localhost/data/all')
  //   .then(data => data.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  return (
    <div className="App">
      <IconStyle/>
      <BrowserRouter>
        <Route path='/' exact component={Explore}></Route>
        <Route path='/forum' component={Forum}></Route>
        <Route path='/study' component={Study}></Route>
        <Route path='/my' component={My}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
