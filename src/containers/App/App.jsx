import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import ContactUsPAge from "../ContactUsPage";
import Footer from "../Footer";
import Header from "../Header";
import MessagesPage from "../MessagesPage";
import Page404 from "../Page404";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-container container-fluid px-0">
        <Switch>
          <Route exact path="/" component={ContactUsPAge} />
          <Route path="/messages/" component={MessagesPage} />
          <Route path="/error/404" component={Page404} />
          <Redirect from="*" to="/error/404" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
