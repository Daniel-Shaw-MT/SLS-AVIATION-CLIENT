import{ BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Help from './components/Help'

function App() {  

  return (
    <Router>
    <div className="container">
      <Route path='/' exact render={(props) =>(
        <>
          <Header />
          <LoginForm />
        </>
      )}/>
      <Route path='/help' component={Help}/>
      
    </div>
    </Router>
  );
  
}

export default App;
