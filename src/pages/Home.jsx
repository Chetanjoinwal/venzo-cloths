import { Link } from "react-router-dom"
import { Collection } from "../Component/Collection" 
import {Bannerheadline} from "../Component/bannerheadline"
import {Headline} from "../Component/Headline"
// import Breadcrumbs from "../Component/breadcrumb 
export default function Home() {
  return (  <>  {/* <Breadcrumbs /> */} 
      <section className="product_section womens_product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="banner_area">
                <div className="banner_thumb">
                  <Link to="/shop">
                    <img src="assets/img/bg/banner2.jpg" alt="Women Collection Banner" />
                  </Link>
                </div>
              </div>
            </div> 
            <div className="col-lg-6 col-md-12">
              <div className="section_title">
                <h2>For Women’s Collection</h2>
                <p>
                  Contemporary, minimal and modern designs embody the Lavish Alice handwriting
                </p>
              </div> 
              <Collection />
            </div>
          </div>
        </div> 
        <Link to="/about">About</Link>
      </section> 
      <Headline />
      <Bannerheadline />
    </>
  );
}
