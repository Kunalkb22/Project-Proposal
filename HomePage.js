import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/homePage.css";

function HomePage() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize navigation hook

  // Fetch all active events on page load
  useEffect(() => {
    axios
      .get("http://localhost:8081/getAllActiveEvents")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  // Handle redirect to PurchaseTickets with eventId
  const handleBook = (eventId) => {
    navigate(`/purchaseTickets/${eventId}`);
  };

  return (
    <div>
      <div className="page-title">🎟️ Active Events</div>

      <div className="events-container">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.event_id} className="event-card">
              <div className="event-title">{event.event_name}</div>
              <div className="event-details">
                <p>📍 Venue: {event.venue || "Not specified"}</p>
                <p>🎫 Total Tickets: {event.total_tickets}</p>
                <p>💲 Price per Ticket: ${event.price_per_ticket}</p>
              </div>
              <button
                className="btn-book"
                onClick={() => handleBook(event.event_id)}
              >
                Book Tickets
              </button>
            </div>
          ))
        ) : (
          <div className="event-details">No active events available.</div>
        )}
      </div>
    </div>
  );
}

export default HomePage;