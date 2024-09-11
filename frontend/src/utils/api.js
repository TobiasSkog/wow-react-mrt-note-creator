export const fetchEventData = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.encodedNotes;
};
