import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Paper } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock validation
    if (email === "test@example.com" && password === "password123") {
      dispatch(login({ email })); // Store user data in Redux
      navigate("/counter"); // Redirect after login
    } else {
      setError("Invalid email or password. Try 'test@example.com' and 'password123'.");
    }
  };

  return (
    <Paper sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>Login</Typography>
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" fullWidth onClick={handleLogin}>Login</Button>
    </Paper>
  );
}

export default Login;
