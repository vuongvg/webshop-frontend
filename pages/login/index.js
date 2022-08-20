import Link from "next/link";
import React from "react";

function Login() {
   const handleSubmit = (onSubmit) => {};
   return (
      <>
         {/* Log In Section Start */}
         <div className="login-section">
            <div className="materialContainer">
               {/* <form onSubmit={handleSubmit(onSubmit)}> */}
               <form onSubmit={handleSubmit()}>
                  <div className="box">
                     <div className="login-title">
                        <h2>Login</h2>
                     </div>
                     <div className="input">
                        <label htmlFor="email">Email</label>
                        <input
                           id="email"
                           type="text"
                           // {...register('email', {
                           //     required: true,
                           //     pattern:
                           //         /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                           // })}
                        />
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
                        <label htmlFor="password">Password</label>
                        <input
                           id="password"
                           type="password"
                           // {...register('password', {
                           //     required: true,
                           // })}
                        />
                        <span className="spin"></span>
                     </div>
                     {/* {errors.password?.type === 'required' && (
                                <div className="valid-feedback d-block text-danger">
                                    Please fill the password.
                                </div>
                            )} */}

                     <Link href="/forgot-password">
                        <a className="pass-forgot">Forgot your password?</a>
                     </Link>

                     <div className="button login">
                        <button type="submit">
                           {/* {isLoading ? ( */}
                           {0 ? (
                              <div className="spinner-border text-light spinner-border-sm" role="status">
                                 <span className="sr-only">Loading...</span>
                              </div>
                           ) : (
                              <span className="m-0">Log In</span>
                           )}
                        </button>
                     </div>

                     <p className="sign-category">
                        <span>Or sign in with</span>
                     </p>

                     <div className="row gx-md-3 gy-3">
                        <div className="col-md-6">
                           {/* <a href="#" onClick={loginFb}> */}
                           <a href="#" onClick={() => {}}>
                              <div className="social-media fb-media" style={{ height: 51.36 }}>
                                 {/* {isLoadingFb ? ( */}
                                 {0 ? (
                                    <div className="spinner-border text-light spinner-border-sm" role="status">
                                       <span className="sr-only">Loading...</span>
                                    </div>
                                 ) : (
                                    <>
                                       <img
                                          src="/images/inner-page/facebook.png"
                                          // className="img-fluid blur-up lazyload"
                                          className="img-fluid  lazyload"
                                          alt=""
                                       />
                                       <h6>Facebook</h6>
                                    </>
                                 )}
                              </div>
                           </a>
                        </div>
                        <div className="col-md-6">
                           <a href="www.gmail.html">
                              <div className="social-media google-media">
                                 <img
                                    src="/images/inner-page/google.png"
                                    className="img-fluid  lazyload"
                                    // className="img-fluid blur-up lazyload"
                                    alt=""
                                 />
                                 <h6>Google</h6>
                              </div>
                           </a>
                        </div>
                     </div>

                     <p>
                        Not a member?{" "}
                        <Link href="/sign-up">
                           <a className="theme-color">Sign up now</a>
                        </Link>
                     </p>
                  </div>
               </form>
            </div>
         </div>
         {/* Log In Section End */}
      </>
   );
}

export default Login;
