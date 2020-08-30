import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import RoomSelector from './pages/RoomSelector/RoomSelector';
import RoomPage from './pages/RoomPage/RoomPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/room/' component={RoomPage}/>
          <Route exact path = '/' component={RoomSelector}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
