import React, { useState } from "react";

export default function EventInput({ onGenerate }) {
	const [eventId, setEventId] = useState("");

	const handleSubmit = async () => {
		onGenerate(eventId);
	};

	return (
		<div>
			<input type="text" value={eventId} onChange={(e) => setEventId(e.target.value)} placeholder="Enter Event ID" />
			<button onClick={handleSubmit}>Generate Notes</button>
		</div>
	);
}
