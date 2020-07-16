import React, { Component } from "react";

//React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Layouts
import Layout from "./views";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/rapport.scss";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' component={(props) => <Layout {...props} />} />
				</Switch>
			</BrowserRouter>
		);
	}
}
