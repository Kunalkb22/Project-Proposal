// import React, { useState } from "react";
// import axios from "axios";

// function CreateEvent() {
//   const [name, setName] = useState("");
//   const [venue, setVenue] = useState("");
//   const [totalTickets, setTotalTickets] = useState(0);
//   const [pricePerTicket, setPricePerTicket] = useState(0);
//   const [status, setStatus] = useState("");
//   const [remarks, setRemarks] = useState("");

//   const handleSubmit = async () => {
//     const response = await axios.post("http://localhost:8081/createEvent", {
//       name,
//       venue,
//       totalTickets,
//       pricePerTicket,
//       status,
//       remarks,
//       creatorAddress: "0xEa3C1Bb6e776dC772fA6593391492929Ec46b0B2"
//     });
//     alert("Event created successfully");
//   };

//   return (
//     <div>
//       <h3>Create New Event</h3>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" />
//       <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="Venue" />
//       <input type="number" value={totalTickets} onChange={(e) => setTotalTickets(e.target.value)} placeholder="Total Tickets" />
//       <input type="number" value={pricePerTicket} onChange={(e) => setPricePerTicket(e.target.value)} placeholder="Price per Ticket" />
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="">Select Status</option>
//         <option value="Allow Booking">Allow Booking</option>
//         <option value="Cancelled">Cancelled</option>
//       </select>
//       <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="Remarks"></textarea>
//       <button onClick={handleSubmit}>Create Event</button>
//     </div>
//   );
// }

// export default CreateEvent;




// import React, { useState } from "react";
// import axios from "axios";

// function CreateEvent() {
//   const [eventType, setEventType] = useState("");
//   const [name, setName] = useState("");
//   const [venue, setVenue] = useState("");
//   const [totalTickets, setTotalTickets] = useState(0);
//   const [pricePerTicket, setPricePerTicket] = useState(0);
//   const [status, setStatus] = useState("");
//   const [remarks, setRemarks] = useState("");
//   const [showAlert, setShowAlert] = useState(false);
//   const [alertMessage, setAlertMessage] = useState("");
//   const [alertType, setAlertType] = useState("success");

//   const handleSubmit = async () => {
//     try {
//       const payload = {
//         eventType,
//         name,
//         venue,
//         totalTickets: Number(totalTickets),
//         pricePerTicket: Number(pricePerTicket),
//         status,
//         remarks,
//         creatorAddress: "0xEa3C1Bb6e776dC772fA6593391492929Ec46b0B2"
//       };
      
//       console.log("Submitting:", payload);
      
//       const response = await axios.post("http://localhost:8081/createEvent", payload, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
      
//       // Show success alert
//       setAlertMessage("Event created successfully!");
//       setAlertType("success");
//       setShowAlert(true);
      
//       // Hide alert after 3 seconds
//       setTimeout(() => setShowAlert(false), 3000);
      
//       // Reset form after successful submission
//       setEventType("");
//       setName("");
//       setVenue("");
//       setTotalTickets(0);
//       setPricePerTicket(0);
//       setStatus("");
//       setRemarks("");
      
//     } catch (error) {
//       console.error("Error creating event:", error);
      
//       // Show error alert
//       setAlertMessage(`Failed to create event: ${error.response?.data?.message || error.message}`);
//       setAlertType("error");
//       setShowAlert(true);
      
//       // Hide alert after 5 seconds
//       setTimeout(() => setShowAlert(false), 5000);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Custom Alert */}
//       {showAlert && (
//         <div 
//           style={{
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             padding: '1rem 1.5rem',
//             borderRadius: '0.375rem',
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//             zIndex: 50,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column',
//             width: '300px',
//             backgroundColor: alertType === 'success' ? '#f0fff4' : '#fff5f5',
//             borderColor: alertType === 'success' ? '#38a169' : '#e53e3e',
//             color: alertType === 'success' ? '#2f855a' : '#c53030',
//             border: '1px solid'
//           }}
//         >
//           <svg 
//             style={{
//               height: '2rem',
//               width: '2rem',
//               marginBottom: '0.5rem',
//               color: alertType === 'success' ? '#38a169' : '#e53e3e'
//             }}
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 20 20" 
//             fill="currentColor"
//           >
//             {alertType === 'success' ? (
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//             ) : (
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//             )}
//           </svg>
//           <h5 className="text-center">{alertMessage}</h5>
//         </div>
//       )}

//       <div className="card">
//         <h5
//           className="card-header"
//           style={{ backgroundColor: "#E75F5D", color: "#FFFFFF" }}
//         >
//           Create New Event
//         </h5>
//         <div className="card-body">
//           {/* Event Type */}
//           <div className="row mt-3">
//             <div className="form-group col-sm-4">
//               <label className="form-label">Select Event Type</label>
//               <select
//                 className="form-select"
//                 value={eventType}
//                 onChange={(e) => setEventType(e.target.value)}
//               >
//                 <option value="">Select</option>
//                 <option value="MusicConcert">Music Concert</option>
//                 <option value="Standup">Standup Comedy</option>
//                 <option value="Drama">Drama</option>
//               </select>
//             </div>
//           </div>

//           {/* Name and Venue */}
//           <div className="row mt-3">
//             <div className="form-group col-sm-4">
//               <label className="form-label">Name of Event</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="form-group col-sm-4">
//               <label className="form-label">Venue of Event</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={venue}
//                 onChange={(e) => setVenue(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Tickets and Price */}
//           <div className="row mt-3">
//             <div className="form-group col-sm-4">
//               <label className="form-label">Total Tickets</label>
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">#</div>
//                 </div>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={totalTickets}
//                   onChange={(e) => setTotalTickets(Number(e.target.value))}
//                 />
//               </div>
//             </div>

//             <div className="form-group col-sm-4">
//               <label className="form-label">Price Per Ticket</label>
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">$</div>
//                 </div>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={pricePerTicket}
//                   onChange={(e) => setPricePerTicket(Number(e.target.value))}
//                 />
//               </div>
//             </div>

//             {/* Status */}
//             <div className="form-group col-sm-4">
//               <label className="form-label">Status</label>
//               <select
//                 className="form-select"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//               >
//                 <option value="">Select</option>
//                 <option value="Allow Booking">Allow Booking</option>
//                 <option value="Cancelled">Cancelled</option>
//                 <option value="TBD">TBD</option>
//               </select>
//             </div>
//           </div>

//           {/* Remarks */}
//           <div className="form-group mt-3">
//             <label className="form-label">Remarks</label>
//             <textarea
//               className="form-control"
//               rows={3}
//               value={remarks}
//               onChange={(e) => setRemarks(e.target.value)}
//             ></textarea>
//           </div>

//           {/* Buttons */}
//           <div className="row mt-4">
//             <div className="col-9"></div>
//             {/* Save Draft Button */}
//             <div className="col-2 text-end">
//               <button
//                 type="button"
//                 className="btn btn-light"
//                 onClick={() => {
//                   setAlertMessage("Draft saved (not implemented)");
//                   setAlertType("success");
//                   setShowAlert(true);
//                   setTimeout(() => setShowAlert(false), 3000);
//                 }}
//               >
//                 Save Draft
//               </button>
//             </div>

//             {/* Save Button */}
//             <div className="col-1">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 style={{ backgroundColor: "#E75F5D", borderColor: "#E75F5D" }}
//                 className="btn btn-primary"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateEvent;






import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [eventType, setEventType] = useState("");
  const [name, setName] = useState("");
  const [venue, setVenue] = useState("");
  const [totalTickets, setTotalTickets] = useState(0);
  const [pricePerTicket, setPricePerTicket] = useState(0);
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        eventType,
        name,
        venue,
        totalTickets: Number(totalTickets),
        pricePerTicket: Number(pricePerTicket),
        status,
        remarks,
        creatorAddress: "0xEa3C1Bb6e776dC772fA6593391492929Ec46b0B2",
      };

      console.log("Submitting:", payload);

      const response = await axios.post("http://localhost:8081/createEvent", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Show success modal
      setAlertMessage("Event created successfully!");
      setAlertType("success");
      setShowModal(true);

      // Reset form after successful submission
      setEventType("");
      setName("");
      setVenue("");
      setTotalTickets(0);
      setPricePerTicket(0);
      setStatus("");
      setRemarks("");

      // Close modal after 3 seconds
      setTimeout(() => setShowModal(false), 3000);
    } catch (error) {
      console.error("Error creating event:", error);

      // Show error modal
      setAlertMessage(`Failed to create event: ${error.response?.data?.message || error.message}`);
      setAlertType("error");
      setShowModal(true);

      // Close modal after 5 seconds
      setTimeout(() => setShowModal(false), 5000);
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: alertType === "success" ? "#f0fff4" : "#fff5f5",
      borderColor: alertType === "success" ? "#38a169" : "#e53e3e",
      color: alertType === "success" ? "#2f855a" : "#c53030",
      border: "1px solid",
      padding: "2rem",
      borderRadius: "0.375rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
  };

  return (
    <div className="container">
      <Modal isOpen={showModal} style={customStyles} ariaHideApp={false}>
        <div className="flex items-center mb-4">
          <svg
            style={{
              height: "2rem",
              width: "2rem",
              marginRight: "0.5rem",
              color: alertType === "success" ? "#38a169" : "#e53e3e",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {alertType === "success" ? (
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            )}
          </svg>
          <h5 className="text-center">{alertMessage}</h5>
        </div>
      </Modal>

      <div className="card">
        <div
          className="card-header"
          style={{ backgroundColor: "#E75F5D", color: "#FFFFFF", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <span>Create New Event</span>
          <button className="btn btn-light" onClick={handleLogout} style={{ color: "#E75F5D" }}>
            Logout
          </button>
        </div>
        <div className="card-body">
          {/* Event Type */}
          <div className="row mt-3">
            <div className="form-group col-sm-4">
              <label className="form-label">Select Event Type</label>
              <select
                className="form-select"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="MusicConcert">Music Concert</option>
                <option value="Standup">Standup Comedy</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
          </div>

          {/* Name and Venue */}
          <div className="row mt-3">
            <div className="form-group col-sm-4">
              <label className="form-label">Name of Event</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-sm-4">
              <label className="form-label">Venue of Event</label>
              <input
                type="text"
                className="form-control"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
          </div>

          {/* Tickets and Price */}
          <div className="row mt-3">
            <div className="form-group col-sm-4">
              <label className="form-label">Total Tickets</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">#</div>
                </div>
                <input
                  type="number"
                  className="form-control"
                  value={totalTickets}
                  onChange={(e) => setTotalTickets(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="form-group col-sm-4">
              <label className="form-label">Price Per Ticket</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">$</div>
                </div>
                <input
                  type="number"
                  className="form-control"
                  value={pricePerTicket}
                  onChange={(e) => setPricePerTicket(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Status */}
            <div className="form-group col-sm-4">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Allow Booking">Allow Booking</option>
                <option value="Cancelled">Cancelled</option>
                <option value="TBD">TBD</option>
              </select>
            </div>
          </div>

          {/* Remarks */}
          <div className="form-group mt-3">
            <label className="form-label">Remarks</label>
            <textarea
              className="form-control"
              rows={3}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="row mt-4">
            <div className="col-9"></div>
            {/* Save Draft Button */}
            <div className="col-2 text-end">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  setAlertMessage("Draft saved (not implemented)");
                  setAlertType("success");
                  setShowAlert(true);
                  setTimeout(() => setShowAlert(false), 3000);
                }}
              >
                Save Draft
              </button>
            </div>

            {/* Save Button */}
            <div className="col-1">
              <button
                type="button"
                onClick={handleSubmit}
                style={{ backgroundColor: "#E75F5D", borderColor: "#E75F5D" }}
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;






