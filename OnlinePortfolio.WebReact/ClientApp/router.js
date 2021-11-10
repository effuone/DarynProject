import React, { Suspense, lazy } from "react"
import { Router, Switch, Route, Redirect } from "react-router-dom"
import Home from "./views/pages/Home"
import About from "./views/pages/About"
import Portfolio from "./views/pages/Portfolio"
import Profile from "./views/pages/Profile"
import Resources from "./views/pages/Resources"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"
import Login from "./views/pages/authentication/login/Login"

//List of routes
const routes = [
  {
      title: 'Home',
      path: "/",
      Component: Home
  },
  {
      title: 'About',
      path: "/about",
      Component: About
  },
  {
      title: 'Portfolio',
      path: "/portfolio",
      Component: Portfolio
  },
  {
    title: 'Profile',
    path: "/profile",
    Component: Profile
  },
  {
      title: 'Resources',
      path: "/resources",
      Component: Resources
  },
  {
    title: 'Login',
    path: "/login",
    Component: Login
  },

]

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
              return (
                <LayoutTag {...props} permission={props.user}>
                  <Suspense fallback={<Spinner />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
            {routes.map(({path, Component}) => 
                <AppRoute key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={"/"}/>
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
