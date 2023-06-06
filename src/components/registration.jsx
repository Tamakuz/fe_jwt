import { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegistration = () => {
    axios
      .post("https://api-jwt-tamakuz.vercel.app/api/user/register", {
        username,
        password,
        confirmPassword,
      })
      .then(() => {
        navigate("/login");
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
          Registration
        </Typography>
        <Box
          component="form"
          sx={{
            width: "100%",
            "& .MuiTextField-root": {
              mb: 2,
            },
            "& .MuiOutlinedInput-root": {
              borderColor: "white",
              "&:hover fieldset": {
                borderColor: "white",
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
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            InputProps={{
              sx: {
                color: "white", // Mengubah warna teks input menjadi putih
              },
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegistration}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Registration;
