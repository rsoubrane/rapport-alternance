import React, { Component } from "react";

//Utils
import ReactNotifications from "react-notifications-component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//Layouts
import AdminLayout from "./views";

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
						<Route path='/' component={(props) => <AdminLayout {...props} />} />
					</Switch>
				</BrowserRouter>
				<ReactNotifications />
			</Provider>
		);
	}
}
