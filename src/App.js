import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from './projects/AddTask';
import SideBar from './projects/SideBar';
import SignIn from './projects/SignIn.js';
import LogIn from './projects/LogIn.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/mainPage">
          <Switch>
            <div className='TaskLayout'>
              <div className='sideBar'>
                <SideBar />
              </div>
              <div className='taskApp'>
                  <AddTask/>
              </div>
            </div>
          </Switch>
        </Route>

        <div className='SignLayout'>
          <Route exact path="/" component={SignIn} />
        </div>
        <div className='LogInLayout'>
          <Route exact path="/logIn" component={LogIn} />
        </div>
        
      </div>
    </Router>

  );
}


export default App;
