import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

function Contact() {
  return (
    <div className="contact">
      
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          mx: "auto",
          p: 2,
          border: "2px solid  #FFFF",
          borderRadius: "12px",
          boxShadow: 1,
          color: "#0000"
        }}
      > 
        {/* Text on top of the form */}
        <Typography variant="body1" align="center" mb={2} style={{ color: "white" }}>
        Whether you have startup idea, want to revamp your online presence, want to discuss the lastest trends on coding, or need assistance with a software project, I'm here to help. Let's collaborate and turn your vision into a reality. Feel free to contact me, and let's embark on this coding journey together.

       I look forward to the opportunity of working together to build amazing digital experiences.
        </Typography>

        <form>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            required
            style={{ backgroundColor: "white", color: "white" }}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            required
            type="email"
            style={{ backgroundColor: "white", color: "white" }}
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            required
            multiline
            rows={4}
            style={{ backgroundColor: "white", color: "white" }}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": {
                backgroundColor: "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>

    </div>
  );
}
export default Contact