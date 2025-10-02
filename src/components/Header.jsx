import React from "react";


function Header() {
    return (
        <section class="header-bgimage bgimage-property " id="home">
            <div class="container">
                <div class="row justify-content-center">
                    <div className="col-md-10">
                        <div className="d-flex flex-column flex-md-row align-items-center">
                            <div className="header-logo me-md-4 mb-3 mb-md-0">
                                <img src="../images/logo.png" style={{height: "auto" }} />
                            </div>
                            <div class="text-center text-md-start">
                                <h1 class="mb-2">Integrity Commercial Openings</h1>
                                <div class="center no-fs mb-3">
                                    <ul class="no-padding no-margin d-inline-flex">
                                        <li class="header-uline"></li>
                                        <li class="uline-left-padding header-uline"></li>
                                    </ul>
                                </div>
                                <p class="center ls btn-top mb-3">To build trust by delivering every job, large or small, with integrity, respect, responsibility, and an unmatched passion for helping our partners succeed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;