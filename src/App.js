import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./views/Home";
import Readme from "./views/Readme";
import Repositories from "./views/Repositories";

function App() {
    return (
        <Router>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/:username"><Readme /></Route>
            <Route path="/:username/:project"><Repositories /></Route>
        </Router>
    );
}

export default App;
