import React, { Component } from "react";

//Assets
import logoFD from "../../assets/img/free/fd_black.png";
import loading from "../../assets/img/loading/loading.gif";

export default class SplashTab extends Component {
	render() {
		return (
			<>
				{this.props.isVisible ? (
					<div className='splash-screen'>
						<div className='content'>
							<div className='splash-screen-logo'>
								<img src={logoFD} width='450' alt='Logo Free Center' />
							</div>
							<div className={"splash-screen-loading"}>
								<img src={loading} alt='Loading' height='180' />
							</div>
						</div>
					</div>
				) : (
					<div>{this.props.children}</div>
				)}
			</>
		);
	}
}
