import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateContent } from "../store/slices/editorSlice";


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"]
  ]
};

function Editor() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  // Load any saved content from local storage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
      // Update the RTK store with the saved content
      dispatch(updateContent(savedContent));
    }
  }, [dispatch]);

  const handleSave = () => {
    // Save content to local storage
    localStorage.setItem("richTextContent", content);
    // Save content to the Redux store (RTK)
    dispatch(updateContent(content));
    alert("Content saved!");
  };

  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        p: 3,
        mt: 4,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Rich Text Editor
      </Typography>
      <ReactQuill
        value={content}
        onChange={setContent}
        theme="snow"
        modules={modules}
        style={{ height: "300px", marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
        Save Content
      </Button>
    </Box>
  );
}

export default Editor;
