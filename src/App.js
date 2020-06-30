import React, { Component } from "react";

//Utils
import ReactNotifications from "react-notifications-component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//Layouts
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";

//Services
import { PrivateRoute } from "./services/AuthService";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import "./assets/scss/rapport.scss";

// Reducers
import rootReducer from "./reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/login' render={(props) => <AuthLayout {...props} />} />
						<PrivateRoute path='/' component={(props) => <AdminLayout {...props} />} />
					</Switch>
				</BrowserRouter>
				<ReactNotifications />
			</Provider>
		);
	}
}
