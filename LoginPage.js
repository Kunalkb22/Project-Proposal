// import React, { useState } from "react";
// import imgs from "../img/eventive_login.png";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   function handleLogin(event) {
//     event.preventDefault();
//     setError("");
//     axios
//       .post("http://localhost:8081/login", { email, password })
//       .then((res) => {
//         //console.log(res);
//         navigate("/home");
//       })
//       .catch((err) => {
//         setError("Invalid email or password. Please try again.");
//       });
//   }
//   return (
//     <div
//       className="container-fluid vh-100 d-flex align-items-center justify-content-center "
//       style={{ backgroundColor: "#F4F7FF" }}
//     >
//       <div className="row w-100">
//         <div className="col-md-6 d-flex align-items-center justify-content-center">
//           <div className="text-center">
//             <img src={imgs} className="img-fluid mb-4" />
//           </div>
//         </div>
//         <div className="col-md-6 d-flex align-items-center justify-content-center">
//           <div
//             className="card shadow-sm p-4"
//             style={{
//               width: "28rem",
//               height: "28rem",
//               backgroundColor: "#FB7167",
//               color: "white",
//             }}
//           >
//             <div className="text-start mb-4">
//               <div className="mb-1">
//                 <i
//                   style={{
//                     fontWeight: "bold",
//                     fontSize: "24px",
//                     paddingRight: "5px",
//                   }}
//                   class="bi bi-ticket-perforated"
//                 ></i>
//                 <span style={{ fontWeight: "bold", fontSize: "24px" }}>
//                   Welcome to Eventive.
//                 </span>
//                 <p style={{ fontSize: "14px" }}>
//                   Bringing people together, one event at a time!
//                 </p>
//               </div>
//             </div>
//             <form onSubmit={handleLogin}>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               {error && (
//                 <div className="col text-center mb-3">
//                   <span
//                     style={{
//                       color: "black",
//                       fontSize: "14px",
//                       fontWeight: "bold",
//                       textAlign: "center",
//                     }}
//                   >
//                     {error}
//                   </span>
//                 </div>
//               )}
//               <div className="mb-3 form-check text-start">
//                 <div className="row">
//                   <div className="col-6 text-start">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="rememberMe"
//                     />
//                     <label className="form-check-label" htmlFor="rememberMe">
//                       Remember Me
//                     </label>
//                   </div>
//                   <div className="col-6 text-end">
//                     <a
//                       href="#"
//                       className="text-decoration-none"
//                       style={{ color: "#4C51EC" }}
//                     >
//                       Forgot Password?
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-light w-100"
//                 style={{ color: "#FB7167" }}
//               >
//                 Sign In
//               </button>
//             </form>
//             <div className="text-center mt-3">
//               <p>
//                 New on our platform?{" "}
//                 <a
//                   href="#"
//                   className="text-decoration-none"
//                   style={{ color: "#4C51EC" }}
//                 >
//                   Create an account
//                 </a>
//               </p>
//               <div className="d-flex justify-content-center">
//                 <a href="#" className="me-2" style={{ color: "#4C51EC" }}>
//                   <i className="bi bi-facebook"></i>
//                 </a>
//                 <a href="#" className="me-2" style={{ color: "#4C51EC" }}>
//                   <i className="bi bi-twitter"></i>
//                 </a>
//                 <a href="#" style={{ color: "#4C51EC" }}>
//                   <i className="bi bi-google"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;










// import React, { useState } from "react";
// import imgs from "../img/eventive_login.png";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (event) => {  // Made function async
//     event.preventDefault();
//     setError("");
//     try {
//       const res = await axios.post("http://localhost:8081/login", { email, password }); // Await the promise

//       console.log("Login successful:", res.data); // Log success response

//       // You might want to store the token or user info here for future use
//       localStorage.setItem("authToken", res.data.token);  //Example: store token

//       navigate("/home");
//     } catch (err) {
//       console.error("Login failed:", err.response ? err.response.data : err.message);  // Log detailed error

//       setError("Invalid email or password. Please try again."); // generic error message

//       if (err.response && err.response.status === 401) {
//         setError("Incorrect password. Please check your password.");   // more specific error if 401 Unauthorized
//       }
//       else if (err.response && err.response.status === 404){
//           setError("User not found.  Please check your email address."); // specific error if 404 Not Found
//       }
//       else{
//         setError("Login failed.  Please try again later."); // generic error for all other errors
//       }
//     }
//   };

//   return (
//     <div
//       className="container-fluid vh-100 d-flex align-items-center justify-content-center"
//       style={{ backgroundColor: "#F4F7FF" }}
//     >
//       <div className="row w-100">
//         <div className="col-md-6 d-flex align-items-center justify-content-center">
//           <div className="text-center">
//             <img src={imgs} className="img-fluid mb-4" alt="Eventive Login" />
//           </div>
//         </div>
//         <div className="col-md-6 d-flex align-items-center justify-content-center">
//           <div
//             className="card shadow-sm p-4"
//             style={{
//               width: "28rem",
//               height: "28rem",
//               backgroundColor: "#FB7167",
//               color: "white",
//             }}
//           >
//             <div className="text-start mb-4">
//               <div className="mb-1">
//                 <i
//                   style={{
//                     fontWeight: "bold",
//                     fontSize: "24px",
//                     paddingRight: "5px",
//                   }}
//                   className="bi bi-ticket-perforated"
//                 ></i>
//                 <span style={{ fontWeight: "bold", fontSize: "24px" }}>
//                   Welcome to Eventive.
//                 </span>
//                 <p style={{ fontSize: "14px" }}>
//                   Bringing people together, one event at a time!
//                 </p>
//               </div>
//             </div>
//             <form onSubmit={handleLogin}>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}  //Added for controlled component
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   value={password} //Added for controlled component
//                   required
//                 />
//               </div>
//               {error && (
//                 <div className="col text-center mb-3">
//                   <span
//                     style={{
//                       color: "black",
//                       fontSize: "14px",
//                       fontWeight: "bold",
//                       textAlign: "center",
//                     }}
//                   >
//                     {error}
//                   </span>
//                 </div>
//               )}
//               <div className="mb-3 form-check text-start">
//                 <div className="row">
//                   <div className="col-6 text-start">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="rememberMe"
//                     />
//                     <label className="form-check-label" htmlFor="rememberMe">
//                       Remember Me
//                     </label>
//                   </div>
//                   <div className="col-6 text-end">
//                     <a
//                       href="#"
//                       className="text-decoration-none"
//                       style={{ color: "#4C51EC" }}
//                     >
//                       Forgot Password?
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-light w-100"
//                 style={{ color: "#FB7167" }}
//               >
//                 Sign In
//               </button>
//             </form>
//             <div className="text-center mt-3">
//             <p>
//   New on our platform?{" "}
//   <button
//     onClick={() => navigate("/register")}
//     className="text-decoration-none border-0 bg-transparent p-0"
//     style={{ color: "#4C51EC", cursor: "pointer" }}
//   >
//     Create an account
//   </button>
// </p>

//               <div className="d-flex justify-content-center">
//                 <a href="#" className="me-2" style={{ color: "#4C51EC" }}>
//                   <i className="bi bi-facebook"></i>
//                 </a>
//                 <a href="#" className="me-2" style={{ color: "#4C51EC" }}>
//                   <i className="bi bi-twitter"></i>
//                 </a>
//                 <a href="#" style={{ color: "#4C51EC" }}>
//                   <i className="bi bi-google"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;










import React, { useState } from "react";
import imgs from "../img/eventive_login.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    setError("");
    axios
      .post("http://localhost:8081/login", { email, password })
      .then((res) => {
        //console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/home");
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
      });
  }
  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center "
      style={{ backgroundColor: "#F4F7FF" }}
    >
      <div className="row w-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <img src={imgs} className="img-fluid mb-4" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div
            className="card shadow-sm p-4"
            style={{
              width: "28rem",
              height: "28rem",
              backgroundColor: "#FB7167",
              color: "white",
            }}
          >
            <div className="text-start mb-4">
              <div className="mb-1">
                <i
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    paddingRight: "5px",
                  }}
                  class="bi bi-ticket-perforated"
                ></i>
                <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Welcome to Eventive.
                </span>
                <p style={{ fontSize: "14px" }}>
                  Bringing people together, one event at a time!
                </p>
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className="col text-center mb-3">
                  <span
                    style={{
                      color: "black",
                      fontSize: "14px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </span>
                </div>
              )}
              <div className="mb-3 form-check text-start">
                <div className="row">
                  <div className="col-6 text-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember Me
                    </label>
                  </div>
                  <div className="col-6 text-end">
                    <a
                      href="#"
                      className="text-decoration-none"
                      style={{ color: "#4C51EC" }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-light w-100"
                style={{ color: "#FB7167" }}
              >
                Sign In
              </button>
            </form>
            <div className="text-center mt-3">
              <p>
                New on our platform?{" "}
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#4C51EC" }}
                >
                  Create an account
                </a>
              </p>
              <div className="d-flex justify-content-center">
                <a href="#" className="me-2" style={{ color: "#4C51EC" }}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-2" style={{ color: "#4C51EC" }}>
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" style={{ color: "#4C51EC" }}>
                  <i className="bi bi-google"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;