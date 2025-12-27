import React, { useState } from "react";
import axios from "axios";

const TestUsersAxios = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [email, setEmail] = useState(""); // admin email for testing

  const fetchUsers = async () => {
    setError("");
    setUsers([]);
    try {
      const res = await axios.get(
        "https://webfox-ue5o.onrender.com/api/user",
        {
          headers: {
            "x-user-email": email, // dev/testing header
          },
        }
      );

      setUsers(res.data);
    } catch (err) {
      // Axios wraps error
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test /api/user Route (Axios)</h1>

      <input
        type="text"
        placeholder="Enter admin email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-3 py-2 mb-4 w-full"
      />

      <button
        onClick={fetchUsers}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Fetch Users
      </button>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {users.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Users:</h2>
          <ul className="list-disc pl-6">
            {users.map((user) => (
              <li key={user._id}>
                {user.name} - {user.email} - {user.role}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestUsersAxios;
