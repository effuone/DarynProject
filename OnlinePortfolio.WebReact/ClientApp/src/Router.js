import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const Home = lazy(() =>
  import("./views/pages/Home")
)

const About = lazy(() =>
  import("./views/pages/About")
)

const Portfolio = lazy(() =>
  import("./views/pages/Portfolio")
)

const Resources = lazy(() =>
  import("./views/pages/Resources")
)

const Universities = lazy(() =>
  import("./views/pages/Universities")
)

const login = lazy(() =>
  import("./views/pages/authentication/login/Login")
)

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
          <AppRoute
            exact
            path="/"
            component={Home}
          />
          <AppRoute
            path="/about"
            component={About}
          />
          <AppRoute
            path="/portfolio"
            component={Portfolio}
          />
          <AppRoute
            path="/resources"
            component={Resources}
          />
          <AppRoute
            path="/universities"
            component={Universities}
          />
          <AppRoute
            path="/login"
            component={login}
            fullLayout
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
