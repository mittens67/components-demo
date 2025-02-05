import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* Clickable Title to Navigate to Dashboard */}
          <Typography 
            variant="h6" 
            sx={{ flexGrow: 1, cursor: "pointer" }} 
            onClick={() => navigate("/")}
          >
            Components Demo
          </Typography>

          {isAuthenticated && (
            <>
              <Button color="inherit" component={Link} to="/counter">
                Counter
              </Button>
              <Button color="inherit" component={Link} to="/form">
                Form
              </Button>
              <Button color="inherit" component={Link} to="/editor">
                Text Editor
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Container
        sx={{
          mt: 4,
          height: "calc(100vh - 4rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
