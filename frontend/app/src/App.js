import React, { useState } from "react";

function App() {
  const [apiMessage, setApiMessage] = useState("");

  // Dynamically determine backend URL
  const backendUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api/hello"
      : "http://backend:5000/api/hello";

  const fetchApi = async () => {
    try {
      const response = await fetch(backendUrl);
      const data = await response.json();
      setApiMessage(data.message);
    } catch (error) {
      setApiMessage("Error fetching API");
    }
  };

  return (
    <div>
      <h1>React Frontend</h1>
      <button onClick={fetchApi}>Call Backend API</button>
      {apiMessage && <p>API says: {apiMessage}</p>}
    </div>
  );
}

export default App;