import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducers from "./redux/reducers";
import sagas from "./redux/sagas";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
  onError: (err) => {
    if (process.env.REACT_APP_ENV === "dev") {
      //notification.error({ message: "Saga Error", description: err.message });
    } else {
      //   notification.error({
      //     message: "Network Error",
      //     description: "Please check your network connection!",
      //   });
    }
  },
});

const routerMidware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routerMidware];

if (process.env.REACT_APP_ENV === "dev") {
  middlewares.push(logger);
}

const store = createStore(
  reducers(history),
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { history, store };
