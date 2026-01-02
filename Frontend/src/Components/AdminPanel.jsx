import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

   // now ONLY token

  useEffect(() => {




    
    const fetchUsers = async () => {
      


      // frontend-only admin check (UX)
      

      try {
        const res = await axios.get(
          "https://webfox-ue5o.onrender.com/api/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(res.data.users || res.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {users.length > 0 ? (
        <ul className="list-disc pl-6">
          {users.map((user) => (
            <li key={user._id}>
              {user.name} – {user.email} – {user.role || "user"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default AdminPanel;
