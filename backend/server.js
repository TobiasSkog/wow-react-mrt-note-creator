import express from "express";
import request from "request";
import cors from "cors";
import { getEncodedNotes } from "./notesGenerator.js";

const app = express();
// tihi this is a test
app.use(cors());

app.get("/api/:id", async (req, res) => {
 // const apiUrl = `https://raid-helper.dev/api/raidplan/${req.params.id}`;
  try {
    // const response = await fetch(apiUrl);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // const parsedData = await response.json();
    // const encodedNotes = getEncodedNotes(parsedData);
    const encodedNotes = getEncodedNotes();
    res.json({ encodedNotes });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    res.status(500).send(error.message || "Error processing request.");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


