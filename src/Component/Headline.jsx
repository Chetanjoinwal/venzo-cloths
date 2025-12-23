 import { Link } from "react-router-dom"
 function Headline() {
  return (
        <div className="banner_section banner_section_three">
        <div className="container-fluid">
            <div className="row ">
               <div className="col-lg-4 col-md-6">
                    <div className="banner_area">
                        <div className="banner_thumb">
                         <Link to="/">
                                <img src="assets/img/bg/banner8.jpg" alt="#"/>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="banner_area">
                        <div className="banner_thumb">
                            <Link to="/">
                                <img src="assets/img/bg/banner9.jpg" alt="#"/>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="banner_area bottom">
                        <div className="banner_thumb">
                            <Link to="/">
                                <img src="assets/img/bg/banner10.jpg" alt="#"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headline