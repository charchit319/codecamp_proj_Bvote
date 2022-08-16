import Home from"./home.js";
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Vote from "./vote.js";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/Vote"  component ={Vote}/>
    </Router>
  );
}

export default App;
