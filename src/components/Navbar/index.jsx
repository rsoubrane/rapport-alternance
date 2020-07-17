import React, { useState } from "react";

//Reactstrap Components
import { Collapse, Navbar as MyNavbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default function Navbar({ currentPage, returnPage }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => setIsOpen(!isOpen);

	const changePage = (newPage) => {
		setIsOpen(false);
		returnPage(newPage);
	};

	return (
		<MyNavbar className='header' dark expand='md'>
			<div className='header-content'>
				<NavbarBrand href='/#' className='text-logo' onClick={() => changePage(1)}>
					<div className='logo-symbol'>RS</div>
					<div className='logo-text'>
						Romain <span>Soubrane</span>
					</div>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} />
				<Collapse isOpen={isOpen} navbar className='site-nav animate'>
					<Nav navbar className='site-main-menu'>
						<NavItem className={`${currentPage === 2 ? "current-menu-item" : ""}`}>
							<NavLink href='/#' onClick={() => changePage(2)} data-hover='1'>
								Profil
							</NavLink>
						</NavItem>
						<NavItem className={`${currentPage === 3 ? "current-menu-item" : ""}`}>
							<NavLink href='/#' onClick={() => changePage(3)} data-hover='1'>
								Entreprise
							</NavLink>
						</NavItem>
						<NavItem className={`${currentPage === 4 ? "current-menu-item" : ""}`}>
							<NavLink href='/#' onClick={() => changePage(4)} data-hover='1'>
								Missions
							</NavLink>
						</NavItem>
						<NavItem className={`${currentPage === 5 ? "current-menu-item" : ""}`}>
							<NavLink href='/#' onClick={() => changePage(5)} data-hover='1'>
								Bilan
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</div>
		</MyNavbar>
	);
}
