import { useState } from "react";
import EventInput from "./components/EventInput";
import NotesPopup from "./components/NotesPopup";
import { fetchEventData } from "./utils/api";

export default function App() {
  const [notes, setNotes] = useState("");
  const [roster, setRoster] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleGenerate = async (eventId) => {
    try {
      const data = await fetchEventData(eventId);
      const parsedData = JSON.parse(data);
      setNotes(JSON.stringify(parsedData.Notes));
      setRoster(parsedData.Roster);

      setShowPopup(true);
    } catch (error) {
      console.error("Error generating notes:", error);
    }
  };

  return (
    <div className="App">
      <h1>Enter Raid-Helper Event ID:</h1>
      <EventInput onGenerate={handleGenerate} />
      {showPopup && <NotesPopup notes={notes} roster={roster} onClose={() => setShowPopup(false)} />}
    </div>
  );
}
