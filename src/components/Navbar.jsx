import React from "react";

function Navbar() {

	return (
		<>
			<nav className="navbar navbar-inverse common-menu" id="top-nav">
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
										<a href="/" className="pagescroll menu-link dropdown-toggle" data-toggle="dropdown">Home </a>
									</li>
									<li className="dropdown menu-fs menu"><a href="/about/" className="pagescroll dropdown-toggle"> About</a></li>
									<li className="dropdown menu-fs menu"><a href="/team/" className="pagescroll dropdown-toggle"> Our Team</a></li>
									<li className="dropdown menu-fs menu"><a href="/contact" className="pagescroll dropdown-toggle"> contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div >
			</nav >
		</>
	)
}

export default Navbar;