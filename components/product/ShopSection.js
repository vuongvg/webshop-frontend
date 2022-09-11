/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ColorImage from "./ColorImage";
import SelectSize from "./SelectSize";
import Countdown from "./Countdown";

function ShopSection(props = {}) {
   const router = useRouter();
   const colorRef = useRef();
   const sizeRef = useRef();
   // return 'ShopSection'

   const {
      slug,
      id,
      price,
      name,
      stock_quantity,
      categories,
      images,
      on_sale,
      shipping_required,
      regular_price,
      date_on_sale_to,
      color,
      stock_status,
      size,
      discount,
   } = props;

   // const removeProductHandle = (id) => {
   //     dispatch(productRemove(id));
   //     toast.warning('Remove product wishlist successfully!', {
   //         position: 'top-right',
   //         autoClose: 2000,
   //         hideProgressBar: true,
   //         closeOnClick: true,
   //         pauseOnHover: true,
   //         draggable: true,
   //         progress: undefined,
   //     });
   // };

   const addWislistHandle = () => {};
   // const addWislistHandle = () => {
   //     dispatch(
   //         productAdded({
   //             id,
   //             image: images[0],
   //             name,
   //             price,
   //             stock_status,
   //             slug,
   //         })
   //     );

   //     toast.success('Add product to wishlist successfully!', {
   //         position: 'top-right',
   //         autoClose: 2000,
   //         hideProgressBar: true,
   //         closeOnClick: true,
   //         pauseOnHover: true,
   //         draggable: true,
   //         progress: undefined,
   //     });
   // };

   const handleAddcart = () => {};
   // const handleAddcart = () => {
   //     let color = colorRef.current?.getColor();
   //     let size = sizeRef.current?.getSize();
   //     let qty = sizeRef.current?.getQty();

   //     if (!color) {
   //         toast.error('You must choose the color!', {
   //             position: 'top-right',
   //             autoClose: 500,
   //             hideProgressBar: true,
   //             closeOnClick: true,
   //             pauseOnHover: true,
   //             draggable: true,
   //             progress: undefined,
   //         });

   //         return;
   //     }

   //     if (!size) {
   //         toast.error('You must choose the size!', {
   //             position: 'top-right',
   //             autoClose: 500,
   //             hideProgressBar: true,
   //             closeOnClick: true,
   //             pauseOnHover: true,
   //             draggable: true,
   //             progress: undefined,
   //         });

   //         return;
   //     }

   //     const data = {
   //         id,
   //         image: images[0].src,
   //         name,
   //         price,
   //         slug,
   //         qty,
   //         color: color,
   //         size: size,
   //     };

   //     // dispatch(productCartRemove(id));

   //     if (cartState.ids.includes(id)) {
   //         let currentQty = cartState.entities[id].qty;
   //         dispatch(
   //             productCartUpdate({
   //                 id,
   //                 changes: { ...data, qty: currentQty + qty },
   //             })
   //         );
   //         toast.success('Update product in cart successfully!', {
   //             position: 'top-right',
   //             autoClose: 2000,
   //             hideProgressBar: true,
   //             closeOnClick: true,
   //             pauseOnHover: true,
   //             draggable: true,
   //             progress: undefined,
   //         });
   //     } else {
   //         dispatch(productCartAdded(data));
   //         toast.success('Add product to cart successfully!', {
   //             position: 'top-right',
   //             autoClose: 2000,
   //             hideProgressBar: true,
   //             closeOnClick: true,
   //             pauseOnHover: true,
   //             draggable: true,
   //             progress: undefined,
   //         });
   //     }
   // };

   return (
      <section>
         <div className="container">
            <div className="row gx-4 gy-5">
               <div className="col-lg-12 col-12">
                  <div className="details-items">
                     <div className="row g-4">
                        <div className="col-md-6">
                           <div className="row g-4 ratio_asos slider-for">
                              {images.map(({ src, alt }, index) => (
                                 <div key={index} className="col-12 ">
                                    <img src={src} className="img-fluid w-100" alt={alt} />
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className="col-md-6">
                           <div className="cloth-details-size">
                              <div className="details-image-concept">
                                 <h2>{name}</h2>
                              </div>

                              <div className="label-section">
                                 {categories.map(({ slug, name }, index) => (
                                    <Link href={"/product-category/" + slug} key={index}>
                                       <a className="badge badge-grey-color me-2">in {name}</a>
                                    </Link>
                                 ))}
                              </div>

                              <h3 className="price-detail">
                                 {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                 {on_sale && (
                                    <>
                                       <del>{regular_price}</del>
                                       <span>{discount}% off</span>
                                    </>
                                 )}
                              </h3>

                              <ColorImage ref={colorRef} color={color} />
                              <SelectSize ref={sizeRef} size={size} />

                              <div className="product-buttons">
                                 {/* {wishListState.ids.includes(id) ? ( */}
                                 {0 ? (
                                    <a
                                       onClick={() => {
                                          removeProductHandle(id);
                                       }}
                                       className="btn btn-solid"
                                    >
                                       <i className="fa fa-bookmark fz-16 me-2"></i>
                                       <span>Un wishlist</span>
                                    </a>
                                 ) : (
                                    <a onClick={addWislistHandle} className="btn btn-solid">
                                       <i className="fa fa-bookmark fz-16 me-2"></i>
                                       <span>WishList</span>
                                    </a>
                                 )}
                                 <a onClick={handleAddcart} id="cartEffect" className="btn btn-solid hover-solid btn-animation">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>Add To Cart</span>
                                 </a>
                              </div>

                              <ul className="product-count shipping-order">
                                 <li>
                                    <img src="/images/gif/truck.png" className="img-fluid lazyload" alt="image" />
                                    {1 && (
                                       // {shipping_required && (
                                       <span className="lang">Free shipping for orders above $500 USD</span>
                                    )}
                                 </li>
                              </ul>

                              {/* {date_on_sale_to && (
                                            <Countdown
                                                stock_quantity={stock_quantity}
                                                date_on_sale_to={
                                                    date_on_sale_to
                                                }
                                            />
                                        )} */}

                              <div className="border-product">
                                 <h6 className="product-title d-block">share it</h6>
                                 <div className="product-icon">
                                    <ul className="product-social">
                                       <li>
                                          <a
                                             href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.href}
                                             target="_blank"
                                             rel="noreferrer"
                                          >
                                             <i className="fab fa-facebook-f"></i>
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             target="_blank"
                                             href={`http://twitter.com/share?text=${name}&url=${window.location.href}`}
                                             rel="noreferrer"
                                          >
                                             <i className="fab fa-twitter"></i>
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ShopSection;
