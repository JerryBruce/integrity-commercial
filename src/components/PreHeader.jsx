import React from "react";


function PreHeader() {
    return (

    <div className="preheader main-menu">
		<div className="preheader-bg1">
			<div className="preheader-bg">
				<div className="container">
					<div className="navbar-left1 logo1-section menu-logo-center">
						<a href="#"><img src="/images/300x100.png" alt="300x100" className="menu-logo-bottom img-responsive"/></a>
					</div>
					<div className="navbar-right1 preheader-right preheader-right1 menu-top">
						
						<ul className="preheader-div text-center preheader-div-transparent menu-right-border">
							<li className="distab-cell-middle">
								<img src="/images/cellphone.png" alt="40x40x4" />
							</li>
							<li className="distab-cell-middle">
								<p className="left">903-277-6643</p>
								<p className="left">817-564-5824</p>
							</li>
						</ul>
					
					
						<ul className="preheader-div preheader-div-1 text-center preheader-div-transparent menu-right-border">
							<li className="distab-cell-middle">
								<img src="/images/email.png" alt="40x40x5" />
							</li>
							<li className="distab-cell-middle">
								<p className="left"><a href="#">Jake@integritycommercial.net</a></p>
								<p className="left"><a href="#">Zach@integritycommercial.net</a></p>
							</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
    </div>
    )    
}

export default PreHeader;