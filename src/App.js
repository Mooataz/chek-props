
import './App.css';
import PropTypes from"prop-types";
import Profile from './profile/profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure'
function App() {
  return (
    <div className="App">
      <Profile fullName="moaataz" bio=" bio" profession="profession"/>
    </div>
  );
}

export default App;
