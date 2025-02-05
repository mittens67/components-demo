import { useSelector } from "react-redux";
import Counter from "./Counter";
import { Box, Card, CardContent, Typography, Divider, Grid } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const Dashboard = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3, bgcolor: grey[50], borderRadius: 2 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: blue[700] }}>
        Welcome to Your Dashboard
      </Typography>

      {/* Grid Container for side-by-side layout */}
      <Grid container spacing={3}>
        {/* User Profile Card */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>User Profile</Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ color: grey[700] }}>
                <strong>Email:</strong> {user?.email || "N/A"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Counter Visualization Card */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                Counter Value
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Counter />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
