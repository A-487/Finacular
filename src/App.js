
//import { Router } from 'react-router';
import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Assets from './pages/Reports';
import BarChart from "./bar chart/BarChart";
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact components={Home} />
          <Route path='/reports' components={Reports} />
          <Route path='/products' components={Products} />
        </Switch>
      </Router>
    </>
  );
}
function App1() {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);

  return (
    <React.Fragment>
      <BarChart data={data} />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
    </React.Fragment>
  );
}

export {App,App1};
