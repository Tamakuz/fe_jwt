import Nav from "./nav";
import Data from "./data";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api-jwt-tamakuz.vercel.app/api/user/authtoken"
        );
        console.log(res);
      } catch (err) {
        console.log(err.response.data?.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    };

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div>
      <Nav />
      <Data />
    </div>
  );
};

export default Home;
