import React from "react";

export default function Header({ currentPage, returnPage }) {
	return (
		<header id='site_header' className='header'>
			<div className='header-content clearfix'>
				<div className='text-logo'>
					<a href='#' onClick={() => returnPage(1)}>
						<div className='logo-symbol'>RS</div>
						<div className='logo-text'>
							Romain <span>Soubrane</span>
						</div>
					</a>
				</div>

				<div className='site-nav animate mobile-menu-hide'>
					<ul id='menu-classic-menu' className='leven-classic-menu site-main-menu'>
						<li
							className={`${
								currentPage === 2 ? "current-menu-item" : ""
							} menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-160`}>
							<a href='#' onClick={() => returnPage(2)} data-hover='1'>
								Résumé
							</a>
						</li>
						<li
							className={`${
								currentPage === 3 ? "current-menu-item" : ""
							} menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-160`}>
							<a href='#' onClick={() => returnPage(3)} data-hover='1'>
								Entreprise
							</a>
						</li>
						<li
							className={`${
								currentPage === 4 ? "current-menu-item" : ""
							} menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-160`}>
							<a href='#' onClick={() => returnPage(4)} data-hover='1'>
								Missions
							</a>
						</li>
						<li
							className={`${
								currentPage === 5 ? "current-menu-item" : ""
							} menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-160`}>
							<a href='#' onClick={() => returnPage(5)} data-hover='1'>
								Bilan
							</a>
						</li>
						<li
							className={`${
								currentPage === 6 ? "current-menu-item" : ""
							} menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-160`}>
							<a href='#' onClick={() => returnPage(6)} data-hover='1'>
								Témoignage
							</a>
						</li>
					</ul>
				</div>

				<a className='menu-toggle mobile-visible'>
					<i className='fas fa-bars'></i>
				</a>
			</div>
		</header>
	);
}
