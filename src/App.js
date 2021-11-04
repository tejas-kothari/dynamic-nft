import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import CreateDetails from "./pages/CreateDetails";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Header />
        <Sidebar />
        <div className="pl-14 mt-8" style={{ height: "calc(100vh - 7rem )" }}>
          <Switch>
            <Route path="/" exact>
              <CreatePage />
            </Route>
            <Route path="/createdetails" exact>
              <CreateDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
