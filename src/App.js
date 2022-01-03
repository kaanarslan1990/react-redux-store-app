import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/redux-store">
              <Redirect to="/" />
          </Route> 
          <Route exact path="/"component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route> 404 Not Found! </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
