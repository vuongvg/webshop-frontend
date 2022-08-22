import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchApiRegister } from "../../common/fetchApi";

function Register() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rePassword, setRePassword] = useState("");
   const [data, setData] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      const rePassword = e.target[2].value;
      console.log(`  ~ rePassword`, { email, password, rePassword });
      if (password !== rePassword && password) {
         setData({ error: "mk ko trung" });
         return;
      }
      console.log('aaaaaaaaaaaa');
      setIsLoading(true);
      const result = await fetchApiRegister({ email, password });
      setIsLoading(false);
      setData(result);
   };
   useEffect(() => {
      if (data.token) {
         console.log(`  ~ data.token`, data.token);
         router.push("/");
         localStorage.setItem("token", data.token);
      }
   }, [data]);
   return (
      <div className="login-section">
         <div className="materialContainer">
            <form onSubmit={(e) => handleSubmit(e)}>
               <div className="box">
                  <div className="login-title">
                     <h2>Register</h2>
                  </div>
                  <div className="valid-feedback d-block text-danger">{!data.token && data.error}</div>

                  {/* <div className="input">
                    <label htmlFor="username">User name</label>
                    <input
                        type="text"
                        // {...register('username', {
                        //     required: true,
                        //     maxLength: 64,
                        //     minLength: 3,
                        // })}
                        id="username"
                    />
                    <span className="spin"></span>
                </div> */}
                  {/* {errors.username?.type === 'required' && (
                    <div className="valid-feedback d-block text-danger">
                        Please fill the username.
                    </div>
                )}
                {errors.username?.type === 'maxLength' && (
                    <div className="valid-feedback d-block text-danger">
                        Username up to 64 characters long.
                    </div>
                )}
                {errors.username?.type === 'minLength' && (
                    <div className="valid-feedback d-block text-danger">
                        Minimum username length is 3 characters.
                    </div>
                )} */}

                  <div className="input">
                     <label htmlFor="email">{!email && "Email Address"}</label>
                     <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                     <span className="spin"></span>
                  </div>
                  {/* {errors.email?.type === 'required' && (
                    <div className="valid-feedback d-block text-danger">
                        Please fill the email.
                    </div>
                )}
                {errors.email?.type === 'pattern' && (
                    <div className="valid-feedback d-block text-danger">
                        Email format incorrect.
                    </div>
                )} */}

                  <div className="input">
                     <label htmlFor="password">{!password && "Password"}</label>
                     <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                     <span className="spin"></span>
                  </div>
                  {/* {errors.password?.type === 'required' && (
                    <div className="valid-feedback d-block text-danger">
                        Please fill the password.
                    </div>
                )}
                {errors.password?.type === 'minLength' && (
                    <div className="valid-feedback d-block text-danger">
                        Minimum password length is 6 characters.
                    </div>
                )} */}

                  <div className="input">
                     <label htmlFor="repassword">{!rePassword && "Confirm Password"}</label>
                     <input type="password" id="repassword" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                     <span className="spin"></span>
                  </div>
                  {/* {errors.repassword?.type === 'required' && (
                    <div className="valid-feedback d-block text-danger">
                        Please fill the re password.
                    </div>
                )}
                {errors.repassword?.type === 'mathPassword' && (
                    <div className="valid-feedback d-block text-danger">
                        Re password not match password.
                    </div>
                )} */}

                  <div className="button login">
                     <button>
                        {isLoading ? (
                           <div className="spinner-border text-light spinner-border-sm" role="status">
                              <span className="sr-only">Loading...</span>
                           </div>
                        ) : (
                           <span className="m-0">Sign Up</span>
                        )}
                     </button>
                  </div>

                  {/* <p className="sign-category">
                    <span>Or sign up with</span>
                </p>

                <div
                    className="g-signin2"
                    data-onsuccess="onSignIn"
                ></div>

                <div className="row gx-md-3 gy-3">
                    <div className="col-md-6">
                        <a href="#" onClick={()=>{}}>
                            <div
                                className="social-media fb-media"
                                style={{ height: 51.36 }}
                            >
                                {isLoadingFb ? (
                                    <div
                                        className="spinner-border text-light spinner-border-sm"
                                        role="status"
                                    >
                                        <span className="sr-only">
                                            Loading...
                                        </span>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src="/images/inner-page/facebook.png"
                                            className="img-fluid  lazyload"
                                            // className="img-fluid blur-up lazyload"
                                            alt=""
                                        />
                                        <h6>Facebook</h6>
                                    </>
                                )}
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="#">
                            <div
                                className="social-media google-media"
                                id="signup-google"
                            >
                                <img
                                    src="/images/inner-page/google.png"
                                    className="img-fluid lazyload"
                                    // className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                                <h6>Google</h6>
                            </div>
                        </a>
                    </div>
                </div> */}
                  <p>
                     <Link href="/login">
                        <a className="theme-color">Already have an account?</a>
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Register;
