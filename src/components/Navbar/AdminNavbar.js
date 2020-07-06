import React, { Component } from "react";

//Reactstrap Components
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Button,
	NavItem,
	Navbar,
	Nav,
	Container,
	Media,
	NavbarBrand,
	Collapse,
	NavbarToggler,
} from "reactstrap";

//Assets
import Avatar from "../../assets/img/avatar.png";

class AdminNavbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: { first_name: "Romain", last_name: "Soubrane", role: "admin" },
			collapsed: true,
			currentMode: this.props.currentMode,
		};
	}

	handleSwitchMode = (newMode) => {
		this.props.returnMode(newMode);
		this.setState({
			currentMode: newMode,
		});
	};

	logout = () => {
		Auth.signout();
	};

	switchMode = () => {
		switch (this.state.currentMode) {
			case 1:
				return (
					<NavItem>
						<Button className='btn_change_shop' onClick={() => this.handleSwitchMode(2)}>
							<i className='icon icon-exchanging' />
							Étudiant
						</Button>
					</NavItem>
				);
			case 2:
				return (
					<NavItem>
						<Button className='btn_change_shop' onClick={() => this.handleSwitchMode(1)}>
							<i className='icon icon-exchanging' />
							Entreprise & Missions
						</Button>
					</NavItem>
				);
			default:
				break;
		}
	};

	toggleNavbar = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};

	render() {
		return (
			<Navbar className='navbar-top' dark expand='md' id='navbar-main'>
				<Container fluid>
					<NavbarBrand href='/'></NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav className='align-items-center mr-md-5' navbar>
							{this.switchMode()}
							<UncontrolledDropdown nav>
								<DropdownToggle className='pr-0' nav>
									<Media className='align-items-center'>
										<span className='avatar avatar-sm rounded-circle'>
											<img alt='...' src={Avatar} />
										</span>
										<Media className='ml-2'>
											<span className='mb-0 text-sm font-weight-bold'>
												{this.state.user.first_name} {this.state.user.last_name}
											</span>
										</Media>
									</Media>
								</DropdownToggle>
								<DropdownMenu className='dropdown-menu-arrow' right>
									<DropdownItem onClick={(e) => this.logout()}>
										<i className='ni ni-user-run' />
										<span>Déconnexion</span>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default AdminNavbar;
