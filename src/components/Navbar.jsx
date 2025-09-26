import React  from "react";

function Navbar() {

return (
<>
<nav className="navbar navbar-inverse common-menu menu-bg" id="top-nav">
			<div className="container navigation-tb">
				<div className="navbar-header">
					<button data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container" type="button" className="navbar-toggle pull-left nav-icon1"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
				</div>
				<div className="collapse navbar-collapse no-padding navbar-inverse res-menu side-collapse in">
					<div id="menu-list">
						<div className="menu-home-width no-padding">
							<ul className="nav navbar-nav navbar-left no-margin accordion" id="accordion">
								<li className="close-icon"><p className="close-btn"><i className="fa fa-times" aria-hidden="true"></i></p></li>
								<li className="dropdown menu-fs menu">
									<a href="#" className="pagescroll menu-link dropdown-toggle" data-toggle="dropdown">home <span className="caret"></span></a>
									<ul className="dropdown-menu dropdown-menu-1">
										<li className="left"><a href="">Home-1</a></li>
										<li className="left"><a href="">Home-2</a></li>
										<li className="left"><a href="home-3.html">Home-3</a></li>
										<li className="left"><a href="home-4.html">Home-4</a></li>
										<li className="left"><a href="home-5.html">Home-5</a></li>
										<li className="left"><a href="home-6.html">Home-6</a></li>
									</ul>
								</li>
								
								<li className="dropdown menu-fs menu"><a href="#" className="pagescroll menu-link dropdown-toggle" data-toggle="dropdown"> Pages <span className="caret"></span></a>
									<ul className="dropdown-menu dropdown-menu-1">
										<li className="dropdown menu-fs menu"><a href="about.html" className="pagescroll dropdown-toggle"> About</a></li>
										
										<li className="dropdown dropdown-submenu menu-fs menu"><a href="#" className="pagescroll dropdown-toggle sub-link menu-link" data-toggle="dropdown"> Services</a>
											<ul className="dropdown-menu dropdown-menu-1">
												<li className="left"><a href="services-1.html">Services-1</a></li>
												<li className="left"><a href="services-2.html">Services-2</a></li>
												<li className="left"><a href="services-3.html">Services-3</a></li>
											</ul>
										</li>
										<li className="dropdown dropdown-submenu menu-fs menu"><a href="#" className="pagescroll dropdown-toggle sub-link menu-link" data-toggle="dropdown"> Portfolio</a>
											<ul className="dropdown-menu dropdown-menu-1">
												<li className="left"><a href="portfolio-1.html">Portfolio-1</a></li>
												<li className="left"><a href="portfolio-2.html">Portfolio-2</a></li>
												<li className="left"><a href="portfolio-3.html">Portfolio-3</a></li>
											</ul>
										</li>
										<li className="dropdown menu-fs menu"><a href="team.html" className="pagescroll dropdown-toggle"> Our Team</a></li>
										<li className="dropdown menu-fs menu"><a href="contact-1.html" className="pagescroll dropdown-toggle"> contact</a></li>
									</ul>
								</li>
								<li className="menu-fs menu"><a href="projects.html" className="pagescroll"> Projects</a>
								</li>
								
								<li className="dropdown mega-dropdown menu menu-fs">
									<a href="#" className="pagescroll menu-link dropdown-toggle" data-toggle="dropdown"> Elements <span className="caret"></span></a>
									<ul className="dropdown-menu dropdown-menu-1 mega-dropdown-menu elements-menu">
										<li className="elements-1">
											<ul>
												<li><a href="accordions.html">accordions</a></li>
												<li><a href="subscription.html">Subscribe Us</a></li>
											</ul>
										</li>
										<li className="elements-1">
											<ul>
												<li><a href="parallax.html">parallax backgrounds</a></li>
												<li><a href="sliders.html">Carousel Sliders</a></li>
											</ul>
										</li>
										<li className="elements-1">
											<ul>
												<li><a href="team.html">Team</a></li>
												<li><a href="pricing.html">Pricing</a></li>
											</ul>
										</li>
										<li className="elements-1">
											<ul>
												<li><a href="testimonial.html">Testimonial</a></li>
												<li><a href="news.html">News</a></li>
											</ul>
										</li>
										<li className="elements-1">
											<ul>
												<li><a href="counter.html">Counter</a></li>
												<li className="res-element-child"><a href="cta.html">Call To action</a></li>
											</ul>
										</li>
										
									</ul>
								</li>
								<li className="dropdown menu-fs menu"><a href="#" className="pagescroll menu-link dropdown-toggle" data-toggle="dropdown"> Extra <span className="caret"></span></a>
									<ul className="dropdown-menu dropdown-menu-1">
										<li className="left"><a href="page-404.html">404</a></li>
										<li className="left"><a href="coming-soon.html">Coming Soon</a></li>
									</ul>
								</li>
								<li className="dropdown menu-fs menu"><a href="#" className="pagescroll menu-link dropdown-toggle" data-toggle="dropdown"> shop <span className="caret"></span></a>
									<ul className="dropdown-menu dropdown-menu-1">
										<li className="left"><a href="products.html">Products</a></li>
										<li className="left"><a href="single-product.html">Single-Product</a></li>
									</ul>
								</li>
								<li className="menu-fs menu"><a href="contact.html" className="pagescroll"> contact</a>
								</li>
								<li className="dropdown menu-fs menu"><a href="#" className="pagescroll menu-link dropdown-toggle" data-toggle="dropdown"> blog <span className="caret"></span></a>
									<ul className="dropdown-menu dropdown-menu-1">
										<li className="left"><a href="left-sidebar.html">Left-Sidebar</a></li>
										<li className="left"><a href="right-sidebar.html">Right-Sidebar</a></li>
										<li className="left"><a href="both-sidebar.html">Both-Sidebar</a></li>
										<li className="left"><a href="full-width.html">Full-Width</a></li>
										<li className="left"><a href="two-column-grid.html">Two-Column-Grid</a></li>
										<li className="left"><a href="single-left-sidebar.html">Single-Left-Sidebar</a></li>
										<li className="left"><a href="single-right-sidebar.html">Single-Right-Sidebar</a></li>
									</ul>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
</nav>
</>    
)
}

export default Navbar;