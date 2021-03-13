// import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100%;
  height: 100vh;
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1 {
    color: ${props => props.theme.body};
  }
`;

function App() {

  const themeState = useTheme();

  return (
    <div className="App">

        <Wrapper>
          <div className="text-center">
            
            <button class="btn btn-info btn-sm" onClick={() => themeState.toggle()}>
              {themeState.dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <div className="col-lg-8 mx-auto text-center">
          
          <h1>You are just a minute away from your CV</h1>
            {/* <h3>Just Fill in correct info and move on!!</h3> */}
            <br/>
          <UserForm/>
          </div>
        </Wrapper>

      </div>  
  );
}

export default App;
