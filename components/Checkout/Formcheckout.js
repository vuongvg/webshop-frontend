import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { COUNTRIES } from "../../common/countries";
import { toastError, toastSuccess } from "../../common";
import UserContext from "../../store/userContext";
import { fetchApiCreateOrder } from "../../common/fetchApi";

const paymentMethodData = {
   bacs: "Direct bank transfer",
   cheque: "Check payments",
   cod: "Cash on delivery",
   other_payment: "Payment method online",
};

export default function Formcheckout({ data, cartList }) {
   const router = useRouter();
   const user = useContext(UserContext);
   const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
   } = useForm();

   const [loading, setLoading] = useState(false);

   const onSubmit = async (data) => {
      const order = { address: data, orderList: cartList ,userId:user._id,total:amount(cartList)};
      const result=await fetchApiCreateOrder(order)
      if(result.status===201){
         // user.handleRemoveAllCartList()
      }
      return;
      setLoading(true);
      try {
         const result = await wooApi.createOrder({
            payment_method: payment,
            payment_method_title: paymentMethodData[payment],
            customer_id: user.id,
            billing: { ...data },
            shipping: { ...data },
            line_items: Object.values(cartState.entities).map((item, index) => ({
               product_id: item.id,
               quantity: item.qty,
            })),
            coupon_lines:
               couponCode && couponCode !== null
                  ? [
                       {
                          code: couponCode,
                       },
                    ]
                  : [],
         });

         const orderData = result.data;
         const { id: orderId } = orderData;

         const productNotes = Object.values(cartState.entities).map((item, index) => {
            return `---------<br/><b>${item.name} - #${item.id}</b> <br/> [Size: <b>${item.size}</b> | Color: <b>${item.color}</b>]<br/>`;
         });

         await wooApi.createOrderNote(orderId, {
            note: "<i>Products note</i>: <br/>" + productNotes.join(""),
         });

         setLoading(false);

         toastSuccess("Place order successfully!!!");

         if (payment === "other_payment") {
            router.push("/payment?orderId=" + orderId);
         } else {
            router.push("/order-tracking/" + orderId);
         }

         dispatch(productCartRemoveAll());
         dispatch(cartCouponRemove());
      } catch (error) {
         setLoading(false);

         toastError(JSON.stringify(error));
      }
   };

   useEffect(() => {
      setValue("first_name", data.first_name);
      setValue("last_name", data.last_name);
      setValue("email", data.email);
      setValue("address_1", data.address_1);
      setValue("phone", data.phone);
      setValue("country", data.country);
      setValue("state", data.state);
      setValue("postcode", data.postcode);
   }, [data]);

   const [payment, setPayment] = useState("bacs");

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="row g-4">
            <div className="col-md-6">
               <label htmlFor="first_name" className="form-label">
                  First Name
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  placeholder="Enter First Name"
                  {...register("first_name", {
                     required: true,
                  })}
               />
               {errors.first_name?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the first name.</p>}
            </div>

            <div className="col-md-6">
               <label htmlFor="last_name" className="form-label">
                  Last Name
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  placeholder="Enter Last Name"
                  {...register("last_name", {
                     required: true,
                  })}
               />
               {errors.last_name?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the last name.</p>}
            </div>

            <div className="col-md-6">
               <label htmlFor="email" className="form-label">
                  Email address
               </label>
               <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@example.com"
                  {...register("email", {
                     required: true,
                     pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
               />
               {errors.email?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the email.</p>}
               {errors.email?.type === "pattern" && <p className="text-danger mt-1 mb-0">Email format incorrect.</p>}
            </div>

            <div className="col-md-6">
               <label htmlFor="address_1" className="form-label">
                  Address
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="address_1"
                  placeholder="1234 Main St"
                  {...register("address_1", {
                     required: true,
                  })}
               />
               {errors.address_1?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the address.</p>}
            </div>

            <div className="col-md-6">
               <label htmlFor="phone" className="form-label">
                  Phone
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="+841532562215"
                  {...register("phone", {
                     required: true,
                     pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                  })}
               />
               {errors.phone?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the phone.</p>}
               {errors.phone?.type === "pattern" && <p className="text-danger mt-1 mb-0">Phone format incorrect.</p>}
            </div>

            <div className="col-md-6">
               <label htmlFor="country" className="form-label">
                  Country {data.country}
               </label>
               <select
                  className="form-select custome-form-select"
                  id="country"
                  onChange={() => {}}
                  {...register("country", {
                     required: true,
                  })}
               >
                  <option value="">Select country</option>
                  {COUNTRIES.map((country, index) => (
                     <option key={index} value={country.code}>
                        {country.name}
                     </option>
                  ))}
               </select>
               {errors.country?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the country.</p>}
            </div>

            <div className="col-md-6">
               <label htmlFor="state" className="form-label">
                  State
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Enter state"
                  {...register("state", {
                     required: true,
                  })}
               />
               {errors.state?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the state.</p>}
            </div>

            <div className="col-md-6">
               <label htmlFor="postcode" className="form-label">
                  Zip
               </label>
               <input
                  type="text"
                  className="form-control"
                  id="postcode"
                  placeholder="Enter zip code"
                  {...register("postcode", {
                     required: true,
                  })}
               />
               {errors.postcode?.type === "required" && <p className="text-danger mt-1 mb-0">Please fill the zip code.</p>}
            </div>
         </div>
         {/* <hr className="my-lg-5 my-4" /> */}

         <button className="btn btn-solid-default mt-4" type="submit">
            {loading ? (
               <div className="spinner-border text-black spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
               </div>
            ) : (
               <span>Place order</span>
            )}
         </button>
      </form>
   );
}
