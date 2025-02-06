import { Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/slices/counterSlice";

function Counter() {
  const count = useSelector((state: any) => state.counter.count); 
  const dispatch = useDispatch();

  return (
    <Box 
      sx={{ 
        textAlign: "center", 
        p: 4, 
        backgroundColor: "#fff", 
        borderRadius: 2, 
        boxShadow: 3, 
        maxWidth: 400, 
        margin: "0 auto",
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ marginBottom: 3, fontWeight: 'bold', color: 'text.primary' }}
      >
        Counter: {count}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => dispatch(increment())} 
          sx={{ padding: "12px 20px", borderRadius: "50%" }}
        >
          +
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => dispatch(reset())} 
          sx={{ padding: "12px 20px", borderRadius: "50%" }}
        >
          Reset
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => dispatch(decrement())}
          sx={{ padding: "12px 20px", borderRadius: "50%" }}
        >
          -
        </Button>
      </Box>
    </Box>
  );
}

export default Counter;
