import React from "react";


function Header() {
    return (
        <section className="header-bgimage bgimage-property " id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 column-center header-menu ">
                        <div style={{padding: 50}}>
                                <h1 className="center">Integrity Commercial Openings</h1>
                            <div className="center no-fs">
                                <ul className="no-padding no-margin">
                                    <li className="header-uline"></li>
                                    <li className="uline-left-padding header-uline"></li>
                                </ul>
                            </div>
                            <div className="col-md-10 column-center no-padding">
                                <p className="center ls btn-top">Construction is defined as a process that consists of the building or assembling of infrastructure. On the other hand, a Construction Project includes all material and work necessary for the construction</p>
                            </div>
                            <div className="center btn-top">
                                <a href="#">
                                    <div className="btn-1 btn-ant">Get Started</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;