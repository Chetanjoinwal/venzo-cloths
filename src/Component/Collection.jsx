import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import $ from "jquery";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";


export const Collection = () => {
  useEffect(() => {
    $(".product_column3").slick({
      centerMode: true,
      centerPadding: "0",
      slidesToShow: 3,
      arrows: true,
      rows: 2,
      prevArrow: '<button class="prev_arrow"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="next_arrow"><i class="fa fa-angle-right"></i></button>',
      responsive: [
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });

    return () => {
      if ($(".product_column3").hasClass("slick-initialized")) {
        $(".product_column3").slick("unslick");
      }
    };
  }, []); 

  return (<>
      <div className="product_area"> 
                        <div className="product_tab_button">
                            <ul className="nav" role="tablist">
                                <li>
                                    <Link className="active" data-bs-toggle="tab" to="#clothing" role="tab" aria-controls="clothing" aria-selected="true">Clothing</Link>
                                </li>
                                <li>
                                    <Link data-bs-toggle="tab" to="#handbag" role="tab" aria-controls="handbag" aria-selected="false">Handbag</Link>
                                </li>
                                <li>
                                    <Link data-bs-toggle="tab" to="#shoes" role="tab" aria-controls="shoes" aria-selected="false">Shoes</Link>
                                </li>
                                <li>
                                    <Link data-bs-toggle="tab" to="#accessories" role="tab" aria-controls="accessories" aria-selected="false">Accessories</Link>
                                </li>
                            </ul>
                        </div>
                         <div className="tab-content">
                              <div className="tab-pane fade show active" id="clothing" role="tabpanel">
                                     <div className="product_container">
                                        <div className="row product_column3">
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product4.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product3.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Koss KPH7 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product5.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo2 Solo 2</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product8.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats EP Wired</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product9.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Bose SoundLink Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPhone SE 16GB</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product14.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">JBL Flip 3 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo Wireless</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPad with Retina</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              </div>
                              <div className="tab-pane fade" id="handbag" role="tabpanel">
                                    <div className="product_container">
                                        <div className="row product_column3">
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Koss KPH7 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo2 Solo 2</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product14.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats EP Wired</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product12.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Bose SoundLink Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPhone SE 16GB</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product9.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">JBL Flip 3 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo Wireless</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product5.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product4.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPad with Retina</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product3.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                              </div> 
                                <div className="tab-pane fade" id="shoes" role="tabpanel">
                                     <div className="product_container">
                                        <div className="row product_column3">
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product12.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Koss KPH7 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product9.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo2 Solo 2</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product8.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats EP Wired</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product12.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Bose SoundLink Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPhone SE 16GB</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product14.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">JBL Flip 3 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo Wireless</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPad with Retina</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              </div>  
                              <div className="tab-pane fade" id="accessories" role="tabpanel">
                                     <div className="product_container">
                                        <div className="row product_column3">
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product1.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product2.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product4.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product3.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Koss KPH7 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product5.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo2 Solo 2</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product7.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product8.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats EP Wired</Link></h3>
                                                        <span className="current_price">£60.00</span>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product9.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Bose SoundLink Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product10.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product11.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPhone SE 16GB</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product13.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product14.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">JBL Flip 3 Portable</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product15.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product16.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Beats Solo Wireless</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product18.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product17.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>
                                                        <div className="label_product">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Apple iPad with Retina</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single_product">
                                                    <div className="product_thumb">
                                                        <Link className="primary_img" to="product-details.html"><img src="assets/img/product/product19.jpg" alt="" /></Link>
                                                        <Link className="secondary_img" to="product-details.html"><img src="assets/img/product/product20.jpg" alt="" /></Link>
                                                        <div className="product_action">
                                                            <div className="hover_action">
                                                               <Link to="#"><i className="fa fa-plus"></i></Link>
                                                                <div className="action_button">
                                                                    <ul>

                                                                        <li><Link title="add to cart" to="cart.html"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                                                                        <li><Link to="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></Link></li>

                                                                        <li><Link to="compare.html" title="Add to Compare"><i className="fa fa-sliders" aria-hidden="true"></i></Link></li>

                                                                    </ul>
                                                                </div>
                                                           </div>
                                                            
                                                        </div>
                                                        <div className="quick_button">
                                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#modal_box" title="quick_view">+ quick view</Link>
                                                        </div>

                                                        <div className="product_sale">
                                                            <span>-7%</span>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <h3><Link to="product-details.html">Marshall Portable  Bluetooth</Link></h3>
                                                        <span className="current_price">£60.00</span>
                                                        <span className="old_price">£86.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              </div> 
                        </div>
       </div>
  </>
  )
}
