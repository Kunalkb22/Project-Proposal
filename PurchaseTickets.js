// import React, { useState } from "react";
// import axios from "axios";

// function PurchaseTickets() {
//   const [eventId, setEventId] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [ticketType, setTicketType] = useState("");
//   const [remarks, setRemarks] = useState("");
//   const [paymentAmount, setPaymentAmount] = useState("");
//   const [purchaseError, setPurchaseError] = useState("");

//   const handlePurchase = async () => {
//     try {
//       const payload = {
//         eventId,
//         quantity,
//         buyerAddress: "0xEa3C1Bb6e776dC772fA6593391492929Ec46b0B2",
//         paymentAmount,
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         ticketType,
//         remarks,
//       };

//       console.log("Payload being sent:", payload);  // Log the payload

//       const response = await axios.post("http://localhost:8081/purchaseTickets", payload);  //Removed content-type header

//       console.log("Purchase successful:", response.data);  // Log success message

//       alert("Tickets purchased successfully");
//     } catch (error) {
//       console.error("Error purchasing tickets:", error);

//       let errorMessage = "Failed to purchase tickets. ";

//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error("Server responded with:", error.response.status, error.response.data); //Log the server response
//         errorMessage += `Server responded with status ${error.response.status}: ${error.response.data.message || "Unknown error"}`;
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error("No response received from server");
//         errorMessage += "No response received from the server. Please check your connection.";
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error("Error setting up the request:", error.message);
//         errorMessage += "An error occurred while setting up the request.";
//       }

//       setPurchaseError(errorMessage);
//       alert(errorMessage);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h5
//           className="card-header"
//           style={{ backgroundColor: "#E75F5D", color: "#FFFFFF" }}
//         >
//           Purchase Tickets
//         </h5>
//         <div className="card-body">
//           {purchaseError && ( // Display the error message
//             <div className="alert alert-danger" role="alert">
//               {purchaseError}
//             </div>
//           )}

//           {/* Event Selection */}
//           <div className="row mt-3">
//             <div className="form-group col-sm-4">
//               <label className="form-label">Select Event</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={eventId}
//                 onChange={(e) => setEventId(e.target.value)}
//                 placeholder="Event ID"
//               />
//             </div>
//           </div>

//           {/* User Information */}
//           <div className="row mt-3">
//             <div className="form-group col-sm-3">
//               <label className="form-label">First Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </div>
//             <div className="form-group col-sm-3">
//               <label className="form-label">Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <div className="form-group col-sm-3">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group col-sm-3">
//               <label className="form-label">Phone Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Ticket Details */}
//           <div className="row mt-3">
//             {/* Number of Tickets */}
//             <div className="form-group col-sm-4">
//               <label className="form-label">Number of Tickets</label>
//               <div className="input-group">
//                 <div className="input-group-prepend">
//                   <div className="input-group-text">#</div>
//                 </div>
//                 <input
//                   type="number"
//                   className="form-control"
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                   placeholder="Quantity"
//                 />
//               </div>
//             </div>

//             {/* Ticket Type */}
//             <div className="form-group col-sm-4">
//               <label className="form-label">Type</label>
//               <select
//                 className="form-select"
//                 value={ticketType}
//                 onChange={(e) => setTicketType(e.target.value)}
//               >
//                 <option value="">Select</option>
//                 <option value="Regular">Regular</option>
//                 <option value="Silver">Silver</option>
//                 <option value="Gold">Gold</option>
//                 <option value="Royal">Royal</option>
//               </select>
//             </div>

//             {/* Payment Amount */}
//             <div className="form-group col-sm-4">
//               <label className="form-label">Payment Amount (ETH)</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={paymentAmount}
//                 onChange={(e) => setPaymentAmount(e.target.value)}
//               />
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
//             {/* Save Draft Button */}
//             <div className="col-9"></div>
//             {/* Save Draft Button */}
//             <div className="col-2 text-end">
//               <button
//                 type="button"
//                 className="btn btn-light"
//                 onClick={() => alert("Draft saved (not implemented).")}
//               >
//                 Save Draft
//               </button>
//             </div>

//             {/* Purchase Button */}
//             <div className="col-1">
//               <button
//                 type="button"
//                 onClick={handlePurchase}
//                 style={{ backgroundColor: "#E75F5D", borderColor: "#E75F5D" }}
//                 className="btn btn-primary"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PurchaseTickets;


























import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PurchaseTickets() {
  const { eventId } = useParams(); // ✅ Get eventId from URL param
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: user.email,
        user_id: user.user_id, // Include user_id in payload (invisible)
      }));
    }
  }, []);

  const [selectedEvent, setSelectedEvent] = useState({
    total_tickets: 0,
    price_per_ticket: 0,
    available_tickets: 0,
  });
  const [formData, setFormData] = useState({
    user_id: "",
    event_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    tickets: 0,
    type: "",
    remarks: "",
    total_price: 0,
  });

  const firstNameRef = useRef(null); // Auto-focus

  // Fetch all events on page load
  useEffect(() => {
    axios
      .get("http://localhost:8081/getAllActiveEvents")
      .then((response) => {
        setEvents(response.data);

        // Pre-fill event data if eventId is passed
        if (eventId) {
          const eventDetails = response.data.find(
            (event) => parseInt(event.event_id) === parseInt(eventId)
          );
          if (eventDetails) {
            handleEventPrefill(eventDetails);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, [eventId]);

  // Auto-focus on first name
  useEffect(() => {
    firstNameRef.current?.focus();
  }, []);

  // Pre-fill event when redirected from Home page
  const handleEventPrefill = (eventDetails) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      event_id: eventDetails.event_id,
      tickets: 0,
      total_price: 0,
    }));
    setSelectedEvent({
      total_tickets: eventDetails.total_tickets,
      price_per_ticket: eventDetails.price_per_ticket,
      available_tickets: eventDetails.available_tickets,
    });
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Handle event selection dynamically
    if (name === "event_id") {
      const eventDetails = events.find(
        (event) => parseInt(event.event_id) === parseInt(value)
      );

      if (eventDetails) {
        setSelectedEvent({
          total_tickets: eventDetails.total_tickets,
          price_per_ticket: eventDetails.price_per_ticket,
          available_tickets: eventDetails.available_tickets,
        });
        setFormData((prevFormData) => ({
          ...prevFormData,
          event_id: value,
          tickets: 0,
          total_price: 0,
        }));
      }
    }

    // Calculate price dynamically
    if (name === "tickets") {
      const ticketCount = parseInt(value) || 0;
      if (ticketCount <= selectedEvent.total_tickets) {
        const price = ticketCount * selectedEvent.price_per_ticket;
        setFormData((prevFormData) => ({
          ...prevFormData,
          tickets: ticketCount,
          total_price: price,
        }));
      }
    }
  };

  // Validate form
  const validateForm = () => {
    const { event_id, first_name, last_name, email, phone, tickets, type } =
      formData;

    if (
      !event_id ||
      !first_name ||
      !last_name ||
      !email ||
      !phone ||
      !tickets
    ) {
      alert("All fields are required.");
      return false;
    }

    return true;
  };

  // Handle save
  const handleSave = () => {
    if (!validateForm()) {
      return;
    }
    console.log("Form Data Before Save:", formData); // 👈 Check this in console
    axios
      .post("http://localhost:8081/savePurchaseData", formData)
      .then((response) => {
        if (response.data.success) {
          alert("✅ Purchase successful! 🎟️");
          setFormData({
            event_id: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            tickets: 0,
            type: "",
            remarks: "",
            total_price: 0,
          });
          setSelectedEvent({
            total_tickets: 0,
            price_per_ticket: 0,
          });
        } else {
          alert("❌ Error: " + response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error saving purchase data:", error);
        alert("Error saving data.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <h5
          className="card-header text-white"
          style={{ backgroundColor: "#E75F5D" }}
        >
          🎟️ Purchase Tickets
        </h5>
        <div className="card-body">
          {/* Event Selection */}
          <div className="row mt-3">
            <div className="form-group col-sm-4">
              <label className="form-label">Select Event</label>
              <select
                className="form-select"
                name="event_id"
                value={formData.event_id}
                onChange={handleChange}
              >
                <option value="">Select</option>
                {events.map((event) => (
                  <option key={event.event_id} value={event.event_id}>
                    {event.event_name} (${event.price_per_ticket}/ticket)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* User Details */}
          <div className="row mt-3">
            <div className="form-group col-sm-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                ref={firstNameRef}
                className="form-control"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-sm-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-sm-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                disabled
              />
            </div>
            <div className="form-group col-sm-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Ticket Details */}
          <div className="row mt-3">
            <div className="form-group col-sm-4">
              <label className="form-label">Number of Tickets</label>
              <input
                type="number"
                className="form-control"
                name="tickets"
                onChange={handleChange}
                max={selectedEvent.total_tickets}
              />
              <small className="text-muted">
                Available Tickets: {selectedEvent.available_tickets}
              </small>
            </div>

            <div className="form-group col-sm-4 d-none">
              <label className="form-label ">Type</label>
              <select
                className="form-select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Regular">Regular</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Royal">Royal</option>
              </select>
            </div>

            {/* Total Price */}
            <div className="form-group col-sm-4">
              <label className="form-label">Total Price</label>
              <input
                type="text"
                className="form-control"
                value={`$${formData.total_price}`}
                disabled
              />
            </div>
          </div>

          {/* Remarks */}
          <div className="form-group mt-3">
            <label className="form-label">Remarks</label>
            <textarea
              className="form-control"
              name="remarks"
              rows={3}
              value={formData.remarks}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Save Button */}
          <div className="row mt-4">
            <div className="col-12 text-end">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#E75F5D", borderColor: "#E75F5D" }}
                onClick={handleSave}
              >
                Save Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseTickets;