import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    axios
      .post(
        "https://api-jwt-tamakuz.vercel.app/api/user/login",
        {
          username,
          password,
        },
        {
          withCredentials: true, // Mengirim cookie dalam permintaan
        }
      )
      .then((res) => {
        console.log(res.data);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.response?.data);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          color: "white",
          padding: "2rem",
        }}
      >
        <Typography variant="h4" component="h1" mb={4}>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            width: "100%",
            "& .MuiTextField-root": {
              mb: 2,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Mengubah warna border menjadi putih
              },
              "&:hover fieldset": {
                borderColor: "white", // Mengubah warna border menjadi putih saat di hover
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            InputProps={{
              sx: {
                color: "white", // Mengubah warna teks input menjadi putih
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              sx: {
                color: "white", // Mengubah warna teks input menjadi putih
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 5 }}>
          <Link to={"/registration"}>
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
