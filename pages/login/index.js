import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchApiLogin } from "../../common/fetchApi";
import { useRouter } from "next/router";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      setIsLoading(true);
      const result = await fetchApiLogin({ email, password });
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
      <>
         {/* Log In Section Start */}
         <div className="login-section">
            <div className="materialContainer">
               <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="box">
                     <div className="login-title">
                        <h2>Login</h2>
                     </div>
                     <div className="valid-feedback d-block text-danger">{!data.token && data.error}</div>
                     <div className="input">
                        <label htmlFor="email">{!email && "Email"}</label>
                        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span className="spin"></span>
                     </div>

                     <div className="input">
                        <label htmlFor="password">{!password && "Password"}</label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span className="spin"></span>
                     </div>

                     <Link href="/forgot-password">
                        <a className="pass-forgot">Forgot your password?</a>
                     </Link>

                     <div className="button login">
                        <button type="submit">
                           {isLoading ? (
                              <div className="spinner-border text-light spinner-border-sm" role="status">
                                 <span className="sr-only">Loading...</span>
                              </div>
                           ) : (
                              <span className="m-0">Log In</span>
                           )}
                        </button>
                     </div>

                     {/* <p className="sign-category">
                        <span>Or sign in with</span>
                     </p>

                     <div className="row gx-md-3 gy-3">
                        <div className="col-md-6">
                           <a href="#" onClick={loginFb}>
                              <div className="social-media fb-media" style={{ height: 51.36 }}>
                                 {isLoadingFb ? (
                                 
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
                     </div> */}

                     <p>
                        Not a member?{" "}
                        <Link href="/register">
                           <a className="theme-color">Register now</a>
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
