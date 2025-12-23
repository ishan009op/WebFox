// src/pages/AdminPanel.jsx
import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const [message, setMessage] = useState("");

  const checkAdmin = async () => {
    if (!email) return alert("Enter your email");

    try {
      const res = await axios.post(
        "https://webfox-ue5o.onrender.com/api/admin/check",
        { email }
      );
      if (res.data.isAdmin) {
        setIsAdmin(true);
        setMessage("Welcome to the admin panel!");
      } else {
        setIsAdmin(false);
        setMessage("Access denied: You are not an admin.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel Login</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded-md text-black mb-4 w-full max-w-sm"
      />

      <button
        onClick={checkAdmin}
        className="bg-amber-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
      >
        Check Access
      </button>

      {message && (
        <p
          className={`mt-6 ${
            isAdmin ? "text-green-400" : "text-red-500"
          } font-medium`}
        >
          {message}
        </p>
      )}

      {isAdmin && (
        <div className="mt-8 w-full max-w-lg bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
          <p>Here you can manage your app, view data, etc.</p>
          {/* You can add buttons, tables, stats, etc. here */}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
