// import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';


function App() {


  return (
    <div className="App">

        
          <div className="col-lg-8 mx-auto text-center">
          
          <h1>You are just a minute away from your CV</h1>
            {/* <h3>Just Fill in correct info and move on!!</h3> */}
            <br/>
            <br/>
          <UserForm/>
          </div>

      </div>  
  );
}

export default App;
