import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import Fmtpg from './components/Fmtpg';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      Try some valid paths : exmp add to url: /# or /#/textcolor/backgroundColor 
      
      <Switch>
        {/* <Route exact path="/">          
          <Fmtpg></Fmtpg>
        </Route> */}
        <Route exact path="/:id">          
          <Fmtpg></Fmtpg>
        </Route>
        <Route exact path="/:id/:txtColor/:bgColor">          
          <Fmtpg></Fmtpg>
        </Route>
      </Switch> 
      
    </div>
    </BrowserRouter>
  );
}

export default App;
