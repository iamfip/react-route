import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Friends from './component/Friends/Friends';
import { BrowserRouter as Router,
        Switch,Route,NavLink } from 'react-router-dom';
import About from './component/About/About';
import NotFound from './component/NoFound/NotFound';

function App() {
  return (
    <div className="App">
    <Router>
{/* Nav Link Bar */}
<div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/friends">Users</NavLink>
            </li>
          </ul>
        </nav>
        </div>
      <Switch>
      <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/friends">
          <Friends></Friends>
        </Route>
        
        <Route path="/about">
         <About></About>
        </Route>

        <Route path="*">
         <NotFound>

         </NotFound>
        </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
