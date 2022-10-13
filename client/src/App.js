import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import UserHome from "./UserHome";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./App.css";


const theme = createTheme({
  palette: {
    primary: {
      main: "#2f3e46",
      light: "#52796f",
      dark: "#354f52",
    },
    secondary: {
      main: "#84a98c",
      light: "#cad2c5",
    },
  },
});


function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
        setLoggedIn(true);
      } else {
        response.json().then((data) => setErrors(data.errors));
      }
    });
  }, []);


  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div>
          {user ? (
            <UserHome user={user} logout={logout} />
          ) : (
            <div className="landingPage">
              <h1>Runtly</h1>
              <h4>Welcome to Runtly! Your one stop app for tracking running sessions.</h4>
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F262968065725261291%2F&psig=AOvVaw3CnFQU1IqXpckX5-XAZC09&ust=1665755563144000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCPia8Zut3foCFQAAAAAdAAAAABAH"></img>
              <Login setUser={setUser} />
              <Signup setUser={setUser} />
            </div>
          )}
        </div>
        <hr></hr>
        <footer style={{ textAlign: "center" }}>
          <p className="footerText">
            Got Questions?
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="mailto:eugeneayonga@gmail.com"
            >
              <MailOutlineIcon className="footerIcon" />
            </a>
          </p>

          <br />
          <p className="footerText">
            GitHub:{" "}
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eugeneayonga"
            >
              <GitHubIcon className="footerIcon" />
            </a>
          </p>

          <br />
          <p className="footerText">
            Connect:{" "}
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="www.linkedin.com/in/eugeneayonga"
            >
              <LinkedIn className="footerIcon" />
            </a>
          </p>
        </footer>
      </>
    </ThemeProvider>
  );
}


export default App;
