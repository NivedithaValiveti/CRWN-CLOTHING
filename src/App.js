import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
