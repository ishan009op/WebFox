import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const VerifySuccess = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    // ✅ Save JWT
    localStorage.setItem("token", token);

    // ✅ Clean URL (remove token from address bar)
    window.history.replaceState({}, document.title, "/verify-success");

    setStatus("success");

    // 🔁 Redirect after short delay
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
      >
        {status === "verifying" && (
          <>
            <h2 className="text-xl font-semibold">Verifying your email…</h2>
            <p className="text-slate-400 mt-2">Please wait</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 className="text-2xl font-bold text-green-400">
              Email Verified 🎉
            </h2>
            <p className="text-slate-300 mt-2">
              Your account is now active.
            </p>
            <p className="text-slate-400 mt-4">
              Redirecting to homepage…
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-2xl font-bold text-red-400">
              Verification Failed ❌
            </h2>
            <p className="text-slate-400 mt-2">
              Invalid or expired verification link.
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default VerifySuccess;
