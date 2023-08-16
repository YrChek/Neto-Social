import LoginForm from "./components/LoginForm";
import EntryForm from "./components/EntryForm";
import UserForm from "./components/UserForm";
import './App.css';
import { useState } from "react";
import WaitingDownload from "./components/WaitingDownload";
import NewsWire from "./components/NewsWire";
import NewsScreen from "./components/NewsScreen";
import News from "./components/News";
import MyContext from "./context/AuthContext";

const userToken = localStorage.getItem('token');
const userData = JSON.parse(localStorage.getItem('user'))

function App() {
  const [token, setToken] = useState(userToken);
  const [user, setUser] = useState(userData);

  const handlerLogin = (authData) => {
    const fetchPost = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_BASE_URL + 'auth', {
          method: 'POST',
          body: JSON.stringify(authData)
        });
        if (!response.ok) {
          throw new Error(response.statusText); 
        }
        const data = await response.json();
        setToken(data.token)
        localStorage.setItem('token', data.token)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }

  const handlerLogout = () => {
    localStorage.clear()
    setToken(null);
    setUser(null)
  }

  return (
    <div className="App">
      <MyContext.Provider value={{token, user, setUser, out: handlerLogout, auth: handlerLogin}}>
        <LoginForm>
          { !token ? <EntryForm /> : null }
          {token && !user ? <WaitingDownload /> : null}
          { user ? <UserForm /> : null }
        </LoginForm>
        <NewsWire>
          {!user ? <NewsScreen /> : null}
          {user && !user.error ? <News /> : null}
        </NewsWire>
      </MyContext.Provider>
    </div>
  );
}

export default App;
