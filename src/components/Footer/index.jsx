import React from "react";

export default function Footer() {
	return (
		<footer className='site-footer clearfix'>
			<div className='footer-social'>
				<ul className='footer-social-links'>
					<li>
						<a href='https://linkedin.com/rsoubrane' target='_blank' rel='noopener noreferrer'>
							LinkedIn
						</a>
					</li>
					<li>
						<a href='https://twitter.com/EpticRS' target='_blank' rel='noopener noreferrer'>
							Twitter
						</a>
					</li>
					<li>
						<a href='https://facebook.com/rsoubrane' target='_blank' rel='noopener noreferrer'>
							Facebook
						</a>
					</li>
					<li>
						<a href='https://instagram.com/rsoubrane' target='_blank' rel='noopener noreferrer'>
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
