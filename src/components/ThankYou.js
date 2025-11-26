import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="thankyou-container">
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <p>Redirecting to Home in <strong>{seconds} seconds...</strong></p>
    </div>
  );
};

export default ThankYou;
