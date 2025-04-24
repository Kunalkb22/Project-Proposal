// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Registration data:", formData);
//     // Add registration logic later
//   };

//   // ▼ Paste the styled container here (replaces the existing outer div) ▼
//   return (
//     <div 
//       className="container-fluid vh-100 d-flex align-items-center justify-content-center"
//       style={{ backgroundColor: "#F4F7FF" }}  // Same as login page
//     >
//       <div 
//         className="card shadow-sm p-4" 
//         style={{ 
//           width: "28rem",
//           backgroundColor: "#FB7167",  // Pink card
//           color: "white"               // White text
//         }}
//       >
//         <h2 className="text-center mb-4">Create an Account</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Form fields */}
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) => setFormData({...formData, password: e.target.value})}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-light w-100" style={{ color: "#FB7167" }}>
//             Sign Up
//           </button>
//           <p className="text-center mt-3">
//             Already have an account?{" "}
//             <a 
//               href="#" 
//               onClick={() => navigate("/login")}
//               className="text-decoration-none"
//               style={{ color: "#4C51EC" }}
//             >
//               Login here
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;














// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8081/register", formData);
//       if (res.data.success) {
//         navigate("/login");
//       } else {
//         setError(res.data.message);
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="container-fluid vh-100 d-flex align-items-center justify-content-center"
//          style={{ backgroundColor: "#F4F7FF" }}>
//       <div className="card shadow-sm p-4"
//            style={{
//              width: "28rem",
//              backgroundColor: "#FB7167",
//              color: "white"
//            }}>
//         <h2 className="text-center mb-4">Create an Account</h2>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({...formData, email: e.target.value})}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) => setFormData({...formData, password: e.target.value})}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-light w-100" style={{ color: "#FB7167" }}>
//             Sign Up
//           </button>
//           <p className="text-center mt-3">
//             Already have an account?{" "}
//             <button 
//               onClick={() => navigate("/login")}
//               style={{
//                 background: "none",
//                 border: "none",
//                 color: "#4C51EC",
//                 cursor: "pointer",
//                 padding: 0,
//                 textDecoration: "underline"
//               }}
//             >
//               Login here
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgs from "../img/eventive_login.png";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Register the user
      const registerRes = await axios.post("http://localhost:8081/register", formData);
      
      if (registerRes.data.success) {
        // 2. Auto-login after successful registration
        const loginRes = await axios.post("http://localhost:8081/login", {
          email: formData.email,
          password: formData.password
        });
        
        // 3. Store token and redirect to home
        localStorage.setItem("authToken", loginRes.data.token);
        localStorage.setItem("user", JSON.stringify(loginRes.data.user));
        navigate("/home");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center"
         style={{ backgroundColor: "#F4F7FF" }}>
      <div className="row w-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <img src={imgs} className="img-fluid mb-4" alt="Eventive Register" />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="card shadow-sm p-4"
               style={{
                 width: "28rem",
                 height: "28rem",
                 backgroundColor: "#FB7167",
                 color: "white"
               }}>
            <h2 className="text-center mb-4">Create an Account</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="btn btn-light w-100" style={{ color: "#FB7167" }}>
                Sign Up
              </button>
              <p className="text-center mt-3">
                Already have an account?{" "}
                <button 
                  onClick={() => navigate("/login")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#4C51EC",
                    cursor: "pointer",
                    padding: 0,
                    textDecoration: "underline"
                  }}
                >
                  Login here
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
