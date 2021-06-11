import "./styles/style.css";
import data from "./data.json";
import User from "./components/User";

function App() {
  console.log(data);
  return (
    <main className="job-list">
      {data.map(user => <User user={user} key={user.id}/>)}
    </main>
  );
}

export default App;
