const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
// const Web3 = require('Web3');
const Web3Module = require('web3');
const web3 = new Web3Module.Web3('http://localhost:7545');




const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to true in production with HTTPS
  })
);
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "eventive",
});


app.get("/getAllUsers", (re, res) => {
  let sql = "SELECT * FROM eventive.user_mst";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  let sql =
    "SELECT * FROM eventive.user_mst WHERE email = ? AND password = ? AND status = 'Active';";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const user = results[0];
    req.session.user = { id: user.id, email: user.email, role: user.role };
    console.log("Logged in:", req.session.user);
    return res.status(200).json({
      message: "Login successful",
      user: {
        user_id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  });
});

// INSERT New Event Route
app.post("/create-event", (req, res) => {
  const {
    eventType,
    eventName,
    venue,
    totalTickets,
    pricePerTicket,
    status,
    remarks,
  } = req.body;

  if (
    !eventType ||
    !eventName ||
    !venue ||
    !totalTickets ||
    !pricePerTicket ||
    !status
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  let sql = `INSERT INTO eventive.events_mst (event_type, event_name, venue, total_tickets, price_per_ticket, status, remarks) 
               VALUES (?, ?, ?, ?, ?, ?, ?);`;

  let values = [
    eventType,
    eventName,
    venue,
    totalTickets,
    pricePerTicket,
    status,
    remarks,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err });
    }
    return res.status(201).json({
      message: "Event created successfully!",
      eventId: result.insertId,
    });
  });
});

// Get Active Events List
app.get("/getAllActiveEvents", (re, res) => {
  let sql =
    "SELECT id as event_id, event_name as event_name, total_tickets as total_tickets, price_per_ticket as price_per_ticket, (total_tickets - (SELECT IFNULL(SUM(no_of_tickets_purchased), 0) as purchasedTickets FROM eventive.purchase_ticket_mst pm where pm.event_id = em.id )) as available_tickets FROM eventive.events_mst em WHERE status = 'allowBooking';";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

// Purchase Ticket
// Save Purchase Data with Total Price
app.post("/savePurchaseData", (req, res) => {
  const {
    event_id,
    first_name,
    last_name,
    email,
    phone,
    tickets,

    remarks,
    total_price,
    user_id,
  } = req.body;

  let sql = `
    INSERT INTO eventive.purchase_ticket_mst 
    (event_id, first_name, last_name, email, phone_no, no_of_tickets_purchased, remarks, total_price, user_id) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  db.query(
    sql,
    [
      event_id,
      first_name,
      last_name,
      email,
      phone,
      tickets,
      remarks,
      total_price,
      user_id,
    ],
    (err, result) => {
      if (err) {
        return res.json({
          success: false,
          message: "Error saving data",
          error: err,
        });
      }
      return res.json({
        success: true,
        message: "Purchase data saved successfully",
      });
    }
  );
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to logout" });
    }
    res.clearCookie("connect.sid");
    return res.status(200).json({ message: "Logged out successfully" });
  });
});

app.get("/", (re, res) => {
  return res.json("From Backend Side");
});

app.listen(8081, () => {
  console.log("listening!");
});
