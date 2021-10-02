import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { selectCurrentUser } from "./redux/user/user.selector";
import { loadUser } from "./redux/user/user.action";

// Protected Route
import PrivateRoute from "./components/routing/PrivateRoute";

import Login from "./page/auth/login";
import Register from "./page/auth/register";
import Contact from "./page/contact/contactPage";

const App = ({ user: { isAuthenticated, user }, loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={Contact} />
        <Route
          exact
          path="/login"
          render={() =>
            isAuthenticated && user ? <Redirect to="/" /> : <Login />
          }
        />
        <Route
          exact
          path="/register"
          render={() =>
            isAuthenticated && user ? <Redirect to="/" /> : <Register />
          }
        />
      </Switch>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps, { loadUser })(App);
