import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateNFT1 from "./pages/CreateNFT1";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Header />
        <Sidebar />
        <div
          className="pl-14 mt-8"
          style={{ height: "calc(100vh - 3rem - 2 * 2rem)" }}
        >
          <Switch>
            <Route path="/" exact>
              <CreateNFT1 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
