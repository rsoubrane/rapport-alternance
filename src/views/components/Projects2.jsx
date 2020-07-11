import React from "react";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "../enterprise/components/BlockTitle";

//Assets
import Pym from "../../assets/img/projects/pym.png";
import TheMask from "../../assets/img/projects/the_mask.png";

const projects = [
	{ id: 0, title: "Pym", imgSrc: Pym },
	{ id: 1, title: "The Mask", imgSrc: TheMask },
	{ id: 2, title: "Jarvis" },
];

export default function Projects2() {
	return (
		<div className='row'>
			<div className=' col-xs-12 col-sm-12 '>
				<div id='col_inner_id-5f00d33f44efd' className='fw-col-inner' data-paddings='0px 0px 0px 0px'>
					<div
						id='portfolio_content_7730da50332b2005ddd6b098146a3670'
						className='portfolio-content'
						data-categories='3,9,8,7,4,6,5'>
						<div
							className='portfolio-grid three-columns shuffle'
							style={{
								position: "relative",
								overflow: "hidden",
								height: "300px",
								transition: "height 450ms ease-out 0s",
							}}>
							<figure
								className='item standard shuffle-item filtered'
								data-groups='["category_all", "category_detailed"]'
								style={{
									position: "absolute",
									top: "0px",
									left: "0px",
									visibility: "visible",
									transition: "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
									opacity: 1,
									transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
								}}>
								<div className='portfolio-item-img'>
									<img
										width='1280'
										height='853'
										src='https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/12.jpg'
										className='attachment-portfolio-image-three-c size-portfolio-image-three-c wp-post-image'
										alt='Full Project 2'
										title=''
										srcSet='https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/12.jpg 1280w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/12-300x200.jpg 300w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/12-1024x682.jpg 1024w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/12-768x512.jpg 768w'
										sizes='(max-width: 768px) 92vw, (max-width: 992px) 450px, (max-width: 1200px) 597px, 25vw'
									/>

									<a
										href='https://lmpixels.com/wp/leven-wp/dark/project/full-project-2/'
										className='ajax-page-load'></a>
								</div>

								<h4 className='name'>Full Project 2</h4>
								<span className='category'>Detailed</span>
							</figure>
							<figure
								className='item lbvideo shuffle-item filtered'
								data-groups='["category_all", "category_video", "category_youtube-video"]'
								style={{
									position: "absolute",
									top: "0px",
									left: "0px",
									visibility: "visible",
									transition: "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
									opacity: 1,
									transform: "translate3d(399px, 0px, 0px) scale3d(1, 1, 1)",
								}}>
								<div className='portfolio-item-img'>
									<img
										width='1280'
										height='852'
										src='https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/7.jpg'
										className='attachment-portfolio-image-three-c size-portfolio-image-three-c wp-post-image'
										alt='YouTube Video 2'
										title=''
										srcSet='https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/7.jpg 1280w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/7-300x200.jpg 300w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/7-1024x682.jpg 1024w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/7-768x511.jpg 768w'
										sizes='(max-width: 768px) 92vw, (max-width: 992px) 450px, (max-width: 1200px) 597px, 25vw'
									/>

									<a
										href='https://www.youtube.com/embed/F-1weFCiYBA'
										className='lightbox mfp-iframe'
										title='YouTube Video 2'></a>
								</div>

								<h4 className='name'>YouTube Video 2</h4>
								<span className='category'>Video, YouTube Video</span>
							</figure>
							<figure
								className='item lbimage shuffle-item filtered'
								data-groups='["category_all", "category_image"]'
								style={{
									position: "absolute",
									top: "0px",
									left: "0px",
									visibility: "visible",
									transition: "transform 450ms ease-out 0s, opacity 450ms ease-out 0s",
									opacity: 1,
									transform: "translate3d(797px, 0px, 0px) scale3d(1, 1, 1)",
								}}>
								<div className='portfolio-item-img'>
									<img
										width='1280'
										height='853'
										src='https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/1.jpg'
										className='attachment-portfolio-image-three-c size-portfolio-image-three-c wp-post-image'
										alt='Image 2'
										title=''
										srcSet='https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/1.jpg 1280w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/1-300x200.jpg 300w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/1-1024x682.jpg 1024w, https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/1-768x512.jpg 768w'
										sizes='(max-width: 768px) 92vw, (max-width: 992px) 450px, (max-width: 1200px) 597px, 25vw'
									/>
									<a
										className='lightbox'
										data-lightbox-gallery='fancybox-item-81'
										title='Image 2'
										href='https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/1.jpg'></a>
								</div>

								<h4 className='name'>Image 2</h4>
								<span className='category'>Image</span>
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
