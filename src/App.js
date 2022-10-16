import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import Suspense from "./components/loaders/suspense";
import E404 from "./pages/errors/404";

const Login = React.lazy(() => import("./pages/auth/login"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const ReportList = React.lazy(() => import("./pages/reports/list"));
const ReportView = React.lazy(() => import("./pages/reports/details"));
const Feedback = React.lazy(() => import("./pages/feedback"));

function App({ history }) {
  return (
    <ConnectedRouter history={history}>
      <React.Suspense fallback={Suspense}>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            exact
            path="/reports"
            render={(props) => <ReportList {...props} />}
          />
          <Route
            exact
            path="/reports/:id"
            render={(props) => <ReportView {...props} />}
          />
          <Route
            exact
            path="/feedback"
            render={(props) => <Feedback {...props} />}
          />
          <Route exact path="*" render={(props) => <E404 {...props} />} />
        </Switch>
      </React.Suspense>
    </ConnectedRouter>
  );
}

export default App;
