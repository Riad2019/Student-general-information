import NavBar from './Components/NavBar.jsx';
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import AllUser from './Components/AllUser.jsx';
import StudentInformation from './Components/StudentInformation.jsx';
import AddUser from './Components/AddUser.jsx';
import NotFound from './Components/NotFound.jsx';
import EditUser from './Components/EditUser.jsx';

function App() {
  return (
    
    <BrowserRouter>
     <NavBar/>
     <Switch>
    <Route exact path="/" component={StudentInformation}/>
    <Route exact path="/add" component={AddUser}/>
    <Route exact path="/all" component={AllUser}/>
    <Route exact path="/edit/:id" component={EditUser} />
    
    <Route component={NotFound} />
    
    
    </Switch> 
    </BrowserRouter>
    
    
    
    
  
    );
}

export default App;
