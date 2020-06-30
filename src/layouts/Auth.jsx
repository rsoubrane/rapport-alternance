import React, { Component } from "react";

//Utils
import { Redirect } from "react-router-dom";

//Logos
import logo from "../assets/img/free/logo-the-mask.png";
import logo_fd from "../assets/img/free/fd_white.png";

export default class Auth extends Component {
	state = {
		signin: {},
		redirectToReferrer: false,
		from: { pathname: "/" },
		notification: false,
	};

	login = () => {
		window.location = "/";
	};

	handleChange = (event) => {
		let signin = this.state.signin;
		signin[event.target.id] = event.target.value;
		this.setState({ signin: signin });
	};

	submitSignin = (event) => {
		event.preventDefault();
		if (!this.state.progress) {
			this.setState({ progress: true }, () => {
				this.login();
			});
		}
	};

	render() {
		if (this.state.redirectToReferrer) {
			return <Redirect to={this.state.from} />;
		} else {
			return (
				<div className='Login'>
					{this.state.notification ? (
						<div className='notifications'>
							<div className='notification error'>
								<div className='left'>
									<div className='icon message-alert'>
										<i className='fa fa-exclamation-circle' aria-hidden='true' />
									</div>
								</div>
								<div className='right'>
									<h2>Une erreur est survenue</h2>
									<p>Votre login / mot de passe est erroné</p>
								</div>
							</div>
						</div>
					) : null}

					<form className='form-signin' onSubmit={(e) => this.submitSignin(e)}>
						<div className='block_logo'>
							<img className='mb-4' src={logo} alt='' width='400' />
						</div>
						<div className='block_form mx-auto w-100'>
							<h1>Bienvenue</h1>
							<div className='input'>
								<input
									type='text'
									id='username'
									value={this.state.signin.username ? this.state.signin.username : ""}
									className='form-control'
									onChange={(e) => this.handleChange(e)}
									placeholder='Identifiant'
									required={true}
								/>
							</div>
							<div className='input'>
								<input
									type='password'
									id='password'
									value={this.state.signin.password ? this.state.signin.password : ""}
									className='form-control'
									onChange={(e) => this.handleChange(e)}
									placeholder='Mot de Passe'
									required={true}
								/>
							</div>

							<button className='btn btn-primary my-4' type='submit'>
								Connexion <span className='fa fa-check'></span>
							</button>

							<p className='text-muted'>
								© 2020 - <img className='my-4' src={logo_fd} alt='' width='200' />
							</p>
						</div>
					</form>
				</div>
			);
		}
	}
}
