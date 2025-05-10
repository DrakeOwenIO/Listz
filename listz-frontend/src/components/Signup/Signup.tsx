import { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, {
          email,
          password
        });
  
        setMessage("Signup successful! 🎉");
        setEmail("");
        setPassword("");
        // TODO: Redirect to login or dashboard
      } catch (err: any) {
        setMessage(err.response?.data || "Signup failed. Please try again.");
      }
    };
  
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
  
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
  
        <button type="submit">Sign Up</button>
  
        {message && <p className="message">{message}</p>}
      </form>
    );
  };
  
  export default Signup;
