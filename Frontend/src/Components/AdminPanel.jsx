import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = ({ loggedInEmail }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // Step 1: Check if user is admin
  const checkAdmin = async () => {
    try {
      // Fetch all users (protected route)
      const res = await axios.get(
        "https://webfox-ue5o.onrender.com/api/user",
        {
          headers: { "x-user-email": loggedInEmail },
        }
      );

      // If the request succeeds, it means the email is admin
      setIsAdmin(true);
      setUsers(res.data);
    } catch (err) {
      setIsAdmin(false);
      setError(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    if (loggedInEmail) checkAdmin();
  }, [loggedInEmail]);

  if (!isAdmin) {
    return <p className="text-red-500">{error || "Not an admin"}</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {users.length > 0 && (
        <ul className="list-disc pl-6">
          {users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email} - {user.role || "user"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;
