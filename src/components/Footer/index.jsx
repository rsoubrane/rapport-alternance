import React from "react";

export default function Footer() {
	return (
		<footer className='site-footer clearfix'>
			<div className='footer-social'>
				<ul className='footer-social-links'>
					<li>
						<a href='#' target='_blank'>
							Twitter
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							Facebook
						</a>
					</li>
					<li>
						<a href='#' target='_blank'>
							Instagram
						</a>
					</li>
				</ul>
			</div>
			<div className='footer-copyrights'>
				<p>© 2020 Tous droits réservés. Romain Soubrane.</p>
			</div>
		</footer>
	);
}
