import React from "react";


function Header() {
    return (
        <section className="header-bgimage bgimage-property " id="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 column-center header-menu ">
                        <div style={{padding: 50}}>
                            <img src="/images/Banner.jpg" width={800}/>
                            <div className="col-md-10 column-center no-padding">
                                <p className="center ls btn-top">We build trust by delivering every job, large or small, with integrity, respect, responsibility, and an unmatched passion for helping our partnes succeed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;