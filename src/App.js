import "./styles/style.css";
import initialData from "./data.json";
import User from "./components/User";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState(initialData)
  return (
    <main className="job-list">
      <SearchBar setData={setData} initialData={initialData} />
      {data.map(user => <User user={user} key={user.id}/>)}
    </main>
  );
}

export default App;
