import { Link } from "react-router-dom" 
const Header = () => {
  return (<>
    
    <header className="header_area header_six">
        <div className="header_middel">
            <div className="container-fluid">
                <div className="middel_inner">
                    <div className="row align-items-center">
                       <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <Link to={"/"}><img src="assets/img/logo/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10">
                            <div className="middel_right_info">
                                <div className="search_bar">
                                    <form action="#">                          
                                        <input placeholder="Search entire store here..." type="text" />
                                        <button type="submit"><i className="ion-ios-search-strong"></i></button>
                                    </form>
                                </div>
                                <div className="top_right text-right">
                                    <ul>
                                      <li className="language"><Link to={"/"}><img src="assets/img/logo/en-gb.png" alt="" /> en-gb <i className="ion-chevron-down"></i></Link>
                                            <ul className="dropdown_language">
                                                <li><Link to={"/"}><img src="assets/img/logo/cigar.jpg" alt="" /> French</Link></li>
                                                <li><Link to={"/"}><img src="assets/img/logo/language2.png" alt="" />German</Link></li>
                                            </ul>
                                        </li>
                                        <li className="currency"><Link to={"/"}>USD <i className="ion-chevron-down"></i></Link>
                                            <ul className="dropdown_currency">
                                                <li><Link to={"/"}>EUR</Link></li>
                                                <li><Link to={"/"}>BRL</Link></li>
                                            </ul>
                                        </li>
                                       <li className="top_links"><Link to={"/"}><i className="ion-android-person"></i> My Account <i className="ion-chevron-down"></i></Link>
                                            <ul className="dropdown_links">
                                                <li><Link to="wishlist.html">My Wish List </Link></li>
                                                <li><Link to="my-account.html">My Account </Link></li>
                                                <li><Link to={"/"}>Sign In</Link></li>
                                                <li><Link to="compare.html">Compare Products  </Link></li>
                                            </ul>
                                        </li> 
                                        
                                    </ul>
                                </div>   

                                <div className="cart_link">
                                    <Link to={"/"}><i className="fa fa-shopping-basket"></i>2 item(s)</Link>
                                 
                                     <div className="mini_cart">
                                        <div className="cart_item top">
                                       <div className="cart_img">
                                           <Link to={"/"}><img src="assets/img/s-product/product.jpg" alt="" /></Link>
                                       </div>
                                        <div className="cart_info">
                                            <Link to={"/"}>Apple iPhone SE 16GB</Link>

                                            <span>1x $60.00</span>
    
                                        </div>
                                        <div className="cart_remove">
                                            <Link to={"/"}><i className="ion-android-close"></i></Link>
                                        </div>
                                    </div>
                                    <div className="cart_item bottom">
                                       <div className="cart_img">
                                           <Link to={"/"}><img src="assets/img/s-product/product2.jpg" alt="" /></Link>
                                       </div>
                                        <div className="cart_info">
                                            <Link to={"/"}>Marshall Portable  Bluetooth</Link>
                                                <span> 1x $160.00</span>
                                        </div>
                                        <div className="cart_remove">
                                            <Link to={"/"}><i className="ion-android-close"></i></Link>
                                        </div>
                                    </div>
                                    <div className="cart__table">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="text-left">Sub-Total :</td>
                                                    <td className="text-right">$150.00</td>
                                                </tr>
                                             
                                                <tr>
                                                    <td className="text-left">Total :</td>
                                                    <td className="text-right">$184.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="cart_button view_cart">
                                        <Link to="cart.html">View Cart</Link>
                                    </div>
                                    <div className="cart_button checkout">
                                        <Link to="checkout.html">Checkout</Link>
                                    </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="horizontal_menu horizontal_menu_six">
                    <div className="main_menu"> 
                        <nav>  
                            <ul>
                                <li><Link to={"/"}>Home <i className="fa fa-angle-down"></i></Link>
                                    <ul className="sub_menu pages">
                                        <li><Link to={"/"}>Home 1</Link></li>
                                        <li><Link to="index-2.html">Home 2</Link></li>
                                        <li><Link to="index-3.html">Home 3</Link></li>
                                        <li><Link to="index-4.html">Home 4</Link></li>
                                        <li><Link to="index-5.html">Home 5</Link></li>
                                        <li><Link to="index-6.html">Home 6</Link></li>
                                        <li><Link to="index-7.html">Home 7</Link></li>
                                        <li><Link to="index-8.html">Home 8</Link></li>
                                        <li><Link to="index-9.html">Home 9</Link></li>
                                    </ul>
                                </li>
                                <li className="mega_items"><Link to="shop.html">shop <i className="fa fa-angle-down"></i></Link>
                                    <ul className="mega_menu">
                                        <li><Link to={"/"}>Shop Layouts</Link>
                                            <ul>
                                                <li><Link to="shop-fullwidth.html">Full Width</Link></li>
                                                <li><Link to="shop-fullwidth-list.html">Full Width list</Link></li>
                                                <li><Link to="shop-right-sidebar.html">Right Sidebar </Link></li>
                                                <li><Link to="shop-right-sidebar-list.html"> Right Sidebar list</Link></li>
                                                <li><Link to="shop-list.html">List View</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={"/"}>other Pages</Link>
                                            <ul>
                                                <li><Link to="portfolio.html">portfolio</Link></li>
                                                <li><Link to="portfolio-details.html">portfolio details</Link></li>
                                                <li><Link to="cart.html">cart</Link></li>
                                                <li><Link to="checkout.html">Checkout</Link></li>
                                                <li><Link to="my-account.html">my account</Link></li>


                                            </ul>
                                        </li>
                                        <li><Link to={"/"}>Product Types</Link>
                                            <ul>
                                                <li><Link to="product-details.html">product details</Link></li>
                                                <li><Link to="product-sidebar.html">product sidebar</Link></li>
                                                <li><Link to="product-gallery.html">product gallery</Link></li>
                                                <li><Link to="product-grouped.html">product grouped</Link></li>
                                                <li><Link to="variable-product.html">product variable</Link></li>

                                            </ul>
                                        </li>
                                        <li><Link to={"/"}>collection</Link>
                                            <ul>
                                                <li><Link to="shop.html">Handbag</Link></li>
                                                <li><Link to="shop.html">Accessories</Link></li>
                                                <li><Link to="shop.html">Clothing</Link></li>
                                                <li><Link to="shop.html">Shoes</Link></li>
                                                <li><Link to="shop.html">Check Trousers</Link></li>

                                            </ul>
                                        </li>
                                        <li className="banner_menu"><Link to={"/"}><img src="assets/img/bg/banner1.jpg" alt="" /></Link></li>
                                    </ul>
                                </li>
                                <li><Link to="blog.html">blog <i className="fa fa-angle-down"></i></Link>
                                    <ul className="sub_menu pages">
                                        <li><Link to="blog-details.html">blog details</Link></li>
                                        <li><Link to="blog-sidebar.html">blog  Sidebar</Link></li>
                                        <li><Link to="blog-fullwidth.html">blog fullwidth</Link></li>
                                    </ul>
                                </li>
                                <li><Link to={"/"}>pages <i className="fa fa-angle-down"></i></Link>
                                    <ul className="sub_menu pages">
                                        <li><Link to="about">About Us</Link></li>
                                        <li><Link to="services.html">services</Link></li>
                                        <li><Link to="faq.html">Frequently Questions</Link></li>
                                        <li><Link to="login.html">login</Link></li>
                                        <li><Link to="my-account.html">my account</Link></li>
                                        <li><Link to="wishlist.html">Wishlist</Link></li>
                                        <li><Link to="404.html">Error 404</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="about">About us</Link></li>
                                <li><Link to="contact">Contact Us</Link></li>
                                <li><Link to={"/"}>Sneaker</Link></li>
                            </ul>   
                        </nav> 
                    </div>
                </div>
            </div>
        </div>



        <div className="header_bottom sticky-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="main_menu_inner">
                            <div className="main_menu"> 
                                <nav>  
                                    <ul>
                                        <li><Link to={"/"}>Home <i className="fa fa-angle-down"></i></Link>
                                            <ul className="sub_menu pages">
                                                <li><Link to={"/"}>Home 1</Link></li>
                                                <li><Link to="index-2.html">Home 2</Link></li>
                                                <li><Link to="index-3.html">Home 3</Link></li>
                                                <li><Link to="index-4.html">Home 4</Link></li>
                                                <li><Link to="index-5.html">Home 5</Link></li>
                                                <li><Link to="index-6.html">Home 6</Link></li>
                                                <li><Link to="index-7.html">Home 7</Link></li>
                                                <li><Link to="index-8.html">Home 8</Link></li>
                                                <li><Link to="index-9.html">Home 9</Link></li>
                                            </ul>
                                        </li>
                                        <li className="mega_items"><Link to="shop.html">shop <i className="fa fa-angle-down"></i></Link>
                                            <ul className="mega_menu">
                                                <li><Link to={"/"}>Shop Layouts</Link>
                                                    <ul>
                                                        <li><Link to="shop-fullwidth.html">Full Width</Link></li>
                                                        <li><Link to="shop-fullwidth-list.html">Full Width list</Link></li>
                                                        <li><Link to="shop-right-sidebar.html">Right Sidebar </Link></li>
                                                        <li><Link to="shop-right-sidebar-list.html"> Right Sidebar list</Link></li>
                                                        <li><Link to="shop-list.html">List View</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={"/"}>other Pages</Link>
                                                    <ul>
                                                        <li><Link to="portfolio.html">portfolio</Link></li>
                                                        <li><Link to="portfolio-details.html">portfolio details</Link></li>
                                                        <li><Link to="cart.html">cart</Link></li>
                                                        <li><Link to="checkout.html">Checkout</Link></li>
                                                        <li><Link to="my-account.html">my account</Link></li>


                                                    </ul>
                                                </li>
                                                <li><Link to={"/"}>Product Types</Link>
                                                    <ul>
                                                        <li><Link to="product-details.html">product details</Link></li>
                                                        <li><Link to="product-sidebar.html">product sidebar</Link></li>
                                                        <li><Link to="product-gallery.html">product gallery</Link></li>
                                                        <li><Link to="product-grouped.html">product grouped</Link></li>
                                                        <li><Link to="variable-product.html">product variable</Link></li>

                                                    </ul>
                                                </li>
                                                <li><Link to={"/"}>collection</Link>
                                                    <ul>
                                                        <li><Link to="shop.html">Handbag</Link></li>
                                                        <li><Link to="shop.html">Accessories</Link></li>
                                                        <li><Link to="shop.html">Clothing</Link></li>
                                                        <li><Link to="shop.html">Shoes</Link></li>
                                                        <li><Link to="shop.html">Check Trousers</Link></li>

                                                    </ul>
                                                </li>
                                                <li className="banner_menu"><Link to={"/"}><img src="assets/img/bg/banner1.jpg" alt="" /></Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="blog.html">blog <i className="fa fa-angle-down"></i></Link>
                                            <ul className="sub_menu pages">
                                                <li><Link to="blog-details.html">blog details</Link></li>
                                                <li><Link to="blog-sidebar.html">blog  Sidebar</Link></li>
                                                <li><Link to="blog-fullwidth.html">blog fullwidth</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to={"/"}>pages <i className="fa fa-angle-down"></i></Link>
                                            <ul className="sub_menu pages">
                                                <li><Link to="about">About Us</Link></li>
                                                <li><Link to="services.html">services</Link></li>
                                                <li><Link to="faq.html">Frequently Questions</Link></li>
                                                <li><Link to="login.html">login</Link></li>
                                                <li><Link to="my-account.html">my account</Link></li>
                                                <li><Link to="wishlist.html">Wishlist</Link></li>
                                                <li><Link to="404.html">Error 404</Link></li>
                                                <li><Link to="compare.html">compare</Link></li>
                                                <li><Link to="privacy-policy.html">privacy policy</Link></li>
                                                <li><Link to="coming-soon.html">coming soon</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="about">About us</Link></li>
                                        <li><Link to="contact">Contact Us</Link></li>
                                    </ul>   
                                </nav> 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div> 
    </header> 


  <div className="off_canvars_overlay">
                
    </div>
    <div className="offcanvas_menu">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="canvas_open">
                        <Link to="javascript:void(0)"><i className="ion-navicon"></i></Link>
                    </div>
                    <div className="offcanvas_menu_wrapper">
                        <div className="canvas_close">
                              <Link to="javascript:void(0)"><i className="ion-android-close"></i></Link>  
                        </div>
                        <div className="welcome_text">
                           <ul>
                               <li><span>Free Delivery:</span> Take advantage of our time to save event</li>
                               <li><span>Free Returns *</span> Satisfaction guaranteed</li>
                           </ul>
                        </div>
                        
                        <div className="top_right">
                            <ul>
                               <li className="top_links"><Link to="#">My Account <i className="ion-chevron-down"></i></Link>
                                    <ul className="dropdown_links">
                                        <li><Link to="wishlist.html">My Wish List </Link></li>
                                        <li><Link to="my-account.html">My Account </Link></li>
                                        <li><Link to="#">Sign In</Link></li>
                                        <li><Link to="compare.html">Compare Products  </Link></li>
                                    </ul>
                                </li> 
                                <li className="language"><Link to="#"><img src="assets/img/logo/language.png" alt="" /> English <i className="ion-chevron-down"></i></Link>
                                    <ul className="dropdown_language">
                                        <li><Link to="#"><img src="assets/img/logo/cigar.jpg" alt="" /> French</Link></li>
                                        <li><Link to="#"><img src="assets/img/logo/language2.png" alt="" />German</Link></li>
                                    </ul>
                                </li>
                                <li className="currency"><Link to="#">USD <i className="ion-chevron-down"></i></Link>
                                    <ul className="dropdown_currency">
                                        <li><Link to="#">EUR</Link></li>
                                        <li><Link to="#">BRL</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div> 
                        <div className="search_bar">
                            <form action="#">
                               <select className="select_option" name="select" defaultValue="1">
  <option value="1">All Categories</option>
  <option value="2">Accessories</option>
  <option value="3">Bridge</option>
  <option value="4">Hub</option>
  <option value="5">Repeater</option>
  <option value="6">Switch</option>
  <option value="7">Video Games</option>
  <option value="8">PlayStation 3</option>
  <option value="9">PlayStation 4</option>
  <option value="10">Xbox 360</option>
  <option value="11">Xbox One</option>
</select>

                                <input placeholder="Search entire store here..." type="text" />
                                <button type="submit"><i className="ion-ios-search-strong"></i></button>
                            </form>
                        </div>
                        <div className="cart_area">
                            <div className="middel_links">
                               <ul>
                                   <li><Link to="login.html">Login</Link></li>
                                   <li>/</li>
                                   <li><Link to="login.html">Register</Link></li>
                               </ul>

                            </div>
                            <div className="cart_link">
                                <Link to="#"><i className="fa fa-shopping-basket"></i>2 item(s)</Link>
                              
                                 <div className="mini_cart">
                                    <div className="cart_item top">
                                       <div className="cart_img">
                                           <Link to="#"><img src="assets/img/s-product/product.jpg" alt="" /></Link>
                                       </div>
                                        <div className="cart_info">
                                            <Link to="#">Apple iPhone SE 16GB</Link>

                                            <span>1x $60.00</span>
    
                                        </div>
                                        <div className="cart_remove">
                                            <Link to="#"><i className="ion-android-close"></i></Link>
                                        </div>
                                    </div>
                                    <div className="cart_item bottom">
                                       <div className="cart_img">
                                           <Link to="#"><img src="assets/img/s-product/product2.jpg" alt="" /></Link>
                                       </div>
                                        <div className="cart_info">
                                            <Link to="#">Marshall Portable  Bluetooth</Link>
                                                <span> 1x $160.00</span>
                                        </div>
                                        <div className="cart_remove">
                                            <Link to="#"><i className="ion-android-close"></i></Link>
                                        </div>
                                    </div>
                                    <div className="cart__table">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="text-left">Sub-Total :</td>
                                                    <td className="text-right">$150.00</td>
                                                </tr>
                                             
                                                <tr>
                                                    <td className="text-left">Total :</td>
                                                    <td className="text-right">$184.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="cart_button view_cart">
                                        <Link to="cart.html">View Cart</Link>
                                    </div>
                                    <div className="cart_button checkout">
                                        <Link to="checkout.html">Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_phone">
                            <p>Call Free Support: <Link to="tel:01234567890">01234567890</Link></p>
                        </div>
                        <div id="menu" className="text-left ">
                            <ul className="offcanvas_main_menu">
                                <li className="menu-item-has-children active">
                                    <Link to="#">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="index.html">Home 1</Link></li>
                                        <li><Link to="index-2.html">Home 2</Link></li>
                                        <li><Link to="index-3.html">Home 3</Link></li>
                                        <li><Link to="index-4.html">Home 4</Link></li>
                                        <li><Link to="index-5.html">Home 5</Link></li>
                                        <li><Link to="index-6.html">Home 6</Link></li>
                                        <li><Link to="index-7.html">Home 7</Link></li>
                                        <li><Link to="index-8.html">Home 8</Link></li>
                                         <li><Link to="index-9.html">Home 9</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="#">Shop</Link>
                                    <ul className="sub-menu">
                                        <li className="menu-item-has-children">
                                            <Link to="#">Shop Layouts</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="shop.html">shop</Link></li>
                                                <li><Link to="shop-fullwidth.html">Full Width</Link></li>
                                                <li><Link to="shop-fullwidth-list.html">Full Width list</Link></li>
                                                <li><Link to="shop-right-sidebar.html">Right Sidebar </Link></li>
                                                <li><Link to="shop-right-sidebar-list.html"> Right Sidebar list</Link></li>
                                                <li><Link to="shop-list.html">List View</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="#">other Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="portfolio.html">portfolio</Link></li>
                                                <li><Link to="portfolio-details.html">portfolio details</Link></li>
                                                <li><Link to="cart.html">cart</Link></li>
                                                <li><Link to="checkout.html">Checkout</Link></li>
                                                <li><Link to="my-account.html">my account</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link to="#">Product Types</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="product-details.html">product details</Link></li>
                                                <li><Link to="product-sidebar.html">product sidebar</Link></li>
                                                <li><Link to="product-grouped.html">product grouped</Link></li>
                                                <li><Link to="variable-product.html">product variable</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="#">blog</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="blog.html">blog</Link></li>
                                        <li><Link to="blog-details.html">blog details</Link></li>
                                        <li><Link to="blog-sidebar.html">blog  Sidebar</Link></li>
                                        <li><Link to="blog-fullwidth.html">blog fullwidth</Link></li>
                                    </ul>

                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="#">pages </Link>
                                    <ul className="sub-menu">
                                        <li><Link to="about">About Us</Link></li>
                                        <li><Link to="services.html">services</Link></li>
                                        <li><Link to="faq.html">Frequently Questions</Link></li>
                                        <li><Link to="contact">contact</Link></li>
                                        <li><Link to="login.html">login</Link></li>
                                        <li><Link to="wishlist.html">Wishlist</Link></li>
                                        <li><Link to="404.html">Error 404</Link></li>
                                        <li><Link to="compare.html">compare</Link></li>
                                        <li><Link to="privacy-policy.html">privacy policy</Link></li>
                                        <li><Link to="coming-soon.html">coming soon</Link></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="my-account.html">my account</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="about">About Us</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="contact"> Contact Us</Link> 
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas_footer">
                            <span><Link to="#"><i className="fa fa-envelope-o"></i> info@yourdomain.com</Link></span>
                            <ul>
                                <li className="facebook"><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                <li className="twitter"><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                <li className="pinterest"><Link to="#"><i className="fa fa-pinterest-p"></i></Link></li>
                                <li className="google-plus"><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                                <li className="linkedin"><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header