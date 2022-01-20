import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import SwarSearch from './components/SwarSearch';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <BrowserRouter>
    <div className=" mt-3 container-fluid align-content-start">
      <div className="container col" style={{marginLeft:'50px',minWidth:'1400px'}}>
        <SearchBar></SearchBar>
    
     
            <Switch>
            <Route exact path={'/:cat/:item'}>
            <SwarSearch></SwarSearch>
            </Route>
            <Route exact path={'/:cat/:term/:item'}>
            <SwarSearch></SwarSearch>
            </Route>          
          </Switch>
         
        
        </div>     
      </div>
      </BrowserRouter>
    
  );
}

export default App;
